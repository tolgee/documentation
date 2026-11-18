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
import io.tolgee.model.enums.TranslationSuggestionState.ACCEPTED
import io.tolgee.model.enums.TranslationSuggestionState.ACTIVE
import io.tolgee.model.enums.TranslationSuggestionState.DECLINED

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

      addLanguage {
        name = "Spanish"
        tag = "es"
        originalName = "Español"
        flagEmoji = "🇪🇸"
      }

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
      }

      addCommunitySuggestions()

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

  private fun ProjectBuilder.addCommunitySuggestions() {
    val contributors = COMMUNITY_SUGGESTIONS.map { it.author }.distinct().associateWith(::addContributor)
    COMMUNITY_SUGGESTIONS.forEach { suggestion ->
      val key = data.keys.single { it.self.name == suggestion.keyName }
      val language = getLanguageByTag(suggestion.languageTag)!!.self
      key.addSuggestion {
        author = contributors.getValue(suggestion.author)
        this.language = language
        translation = suggestion.text
        state = suggestion.state
      }
      if (suggestion.state == ACCEPTED) {
        addTranslation {
          this.key = key.self
          this.language = language
          text = suggestion.text
          state = TranslationState.TRANSLATED
        }
      }
    }
  }

  private class CommunitySuggestion(
    val author: String,
    val languageTag: String,
    val keyName: String,
    val text: String,
    val state: TranslationSuggestionState,
  )

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

    private val COMMUNITY_SUGGESTIONS =
      listOf(
        CommunitySuggestion("Dana Diaz", "es", "add-item-add-button", "Añadir", ACCEPTED),
        CommunitySuggestion("Dana Diaz", "es", "add-item-input-placeholder", "Nuevo elemento de la lista", ACCEPTED),
        CommunitySuggestion("Dana Diaz", "es", "delete-item-button", "Eliminar", ACCEPTED),
        CommunitySuggestion("Dana Diaz", "es", "share-button", "Compartir", ACCEPTED),
        CommunitySuggestion("Dana Diaz", "es", "app-title", "Qué llevar", ACCEPTED),
        CommunitySuggestion("Dana Diaz", "es", "send-via-email", "Enviar por correo electrónico", ACTIVE),
        CommunitySuggestion("Dana Diaz", "es", "welcome-message", "¡Hola, {name}!", DECLINED),
        CommunitySuggestion("Eli Evans", "fr", "app-title", "Quoi emporter", ACTIVE),
        CommunitySuggestion("Fatima Farouk", "fr", "app-title", "Que mettre dans la valise", ACTIVE),
        CommunitySuggestion("Eli Evans", "fr", "share-button", "Partager la liste", ACTIVE),
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
