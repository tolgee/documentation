package io.tolgee.docs

import io.tolgee.component.demoProject.DemoProjectData
import io.tolgee.development.testDataBuilder.builders.OrganizationBuilder
import io.tolgee.development.testDataBuilder.builders.ProjectBuilder
import io.tolgee.development.testDataBuilder.builders.TestDataBuilder
import io.tolgee.development.testDataBuilder.builders.UserAccountBuilder
import io.tolgee.model.enums.OrganizationRoleType
import io.tolgee.model.enums.ProjectPermissionType
import io.tolgee.model.enums.SuggestionsMode
import io.tolgee.model.enums.TranslationState
import io.tolgee.model.enums.TranslationSuggestionState

class DocsTestData {
  val root = TestDataBuilder()
  val owner: UserAccountBuilder
  val editor: UserAccountBuilder
  val reviewer: UserAccountBuilder
  val organization: OrganizationBuilder
  val demo: ProjectBuilder

  init {
    val (alice, bob, charlie) = DemoProjectData.demoUsers
    owner = addUser(alice.name, OWNER_USERNAME)
    editor = addUser(bob.name, "bob@whattopack.test")
    reviewer = addUser(charlie.name, "charlie@whattopack.test")

    organization =
      root
        .addOrganization {
          name = "What to pack"
          slug = "what-to-pack"
        }.build {
          addRole {
            user = owner.self
            organization = this.organization
            type = OrganizationRoleType.OWNER
          }
          addRole {
            user = editor.self
            organization = this.organization
            type = OrganizationRoleType.MEMBER
          }
          addRole {
            user = reviewer.self
            organization = this.organization
            type = OrganizationRoleType.MEMBER
          }
          addLlmProvider {
            name = LLM_PROVIDER_NAME
            apiUrl = "https://mock.test"
          }
        }

    demo =
      root.addProject {
        organizationOwner = organization.self
        name = PROJECT_NAME
        description = "This is a demo project of a packing list app"
        aiTranslatorPromptDescription = "A packing list app that helps travellers decide what to pack"
        public = true
        suggestionsMode = SuggestionsMode.ENABLED
        communityDescription =
          "What to pack is a packing list app for travellers. " +
          "Help us bring it to your language. Source code: [whattopack.example](https://whattopack.example)"
        communityInContext = true
        communityAppUrl = "https://whattopack.example"
      }

    demo.build {
      DemoProjectData.languages.forEach { language ->
        addLanguage {
          name = language.name
          tag = language.tag
          originalName = language.originalName
          flagEmoji = language.flagEmoji
        }
      }

      addPermission {
        user = editor.self
        type = ProjectPermissionType.EDIT
      }
      addPermission {
        user = reviewer.self
        type = ProjectPermissionType.REVIEW
      }

      val spanish =
        addLanguage {
          name = "Spanish"
          tag = "es"
          originalName = "Español"
          flagEmoji = "🇪🇸"
        }.self
      val french = getLanguageByTag("fr")!!.self
      val (dana, eli, fatima) = COMMUNITY_CONTRIBUTORS.map(::addContributor)

      DemoProjectData.translations.getValue("en").keys.forEach { keyName ->
        val key =
          addKey {
            name = keyName
            DemoProjectData.pluralArgNames[keyName]?.let {
              isPlural = true
              pluralArgName = it
            }
          }
        DemoProjectData.descriptions[keyName]?.let(key::setDescription)
        DemoProjectData.tags[keyName]?.forEach(key::addTag)
        DemoProjectData.translations.forEach { (tag, texts) ->
          addTranslation {
            this.key = key.self
            this.language = getLanguageByTag(tag)!!.self
            this.text = texts[keyName]
            this.state = stateOf(tag, keyName)
          }
        }
        SPANISH_BY_DANA[keyName]?.let { (text, state) ->
          key.addSuggestion {
            author = dana
            language = spanish
            translation = text
            this.state = state
          }
          if (state == TranslationSuggestionState.ACCEPTED) {
            addTranslation {
              this.key = key.self
              language = spanish
              this.text = text
              this.state = TranslationState.TRANSLATED
            }
          }
        }
        FRENCH_ALTERNATIVES[keyName]?.forEachIndexed { index, text ->
          key.addSuggestion {
            author = listOf(eli, fatima)[index]
            language = french
            translation = text
            this.state = TranslationSuggestionState.ACTIVE
          }
        }
      }

      PROMPTS.forEach { (promptName, promptTemplate) ->
        addPrompt {
          name = promptName
          providerName = LLM_PROVIDER_NAME
          template = promptTemplate
        }
      }
    }
  }

  private fun addUser(
    name: String,
    username: String,
  ) = root.addUserAccount {
    this.name = name
    this.username = username
  }

  private fun addContributor(name: String) =
    root
      .addUserAccountWithoutOrganization {
        this.name = name
        username = name.lowercase().replace(' ', '.') + "@community.test"
      }.self

  private fun stateOf(
    languageTag: String,
    keyName: String,
  ): TranslationState {
    if (DemoProjectData.inTranslatedState[languageTag] == keyName) return TranslationState.TRANSLATED
    return TranslationState.REVIEWED
  }

  companion object {
    const val PROJECT_NAME = "Demo project"
    const val OWNER_USERNAME = "alice@whattopack.test"
    const val LLM_PROVIDER_NAME = "gpt-4o"

    private val COMMUNITY_CONTRIBUTORS = listOf("Dana Diaz", "Eli Evans", "Fatima Farouk")

    private val SPANISH_BY_DANA =
      mapOf(
        "add-item-add-button" to ("Añadir" to TranslationSuggestionState.ACCEPTED),
        "add-item-input-placeholder" to ("Nuevo elemento de la lista" to TranslationSuggestionState.ACCEPTED),
        "delete-item-button" to ("Eliminar" to TranslationSuggestionState.ACCEPTED),
        "share-button" to ("Compartir" to TranslationSuggestionState.ACCEPTED),
        "app-title" to ("Qué llevar" to TranslationSuggestionState.ACCEPTED),
        "send-via-email" to ("Enviar por correo electrónico" to TranslationSuggestionState.ACTIVE),
        "welcome-message" to ("¡Hola, {name}!" to TranslationSuggestionState.DECLINED),
      )

    private val FRENCH_ALTERNATIVES =
      mapOf(
        "app-title" to listOf("Quoi emporter", "Que mettre dans la valise"),
        "share-button" to listOf("Partager la liste"),
      )

    private val PROMPTS =
      listOf(
        "Prompt for German" to
          "Translate the text for a packing list app. Use the informal \"du\" form.\n{{fragment.intro}}",
        "Prompt for French" to
          "Translate the text for a packing list app. Use the formal \"vous\" form.\n{{fragment.intro}}",
        "Prompt without screenshots" to
          "Translate the text for a packing list app. Do not rely on screenshots.\n{{fragment.intro}}",
      )
  }
}
