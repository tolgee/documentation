package io.tolgee.docs

import io.tolgee.component.demoProject.DemoProjectData
import io.tolgee.development.testDataBuilder.builders.OrganizationBuilder
import io.tolgee.development.testDataBuilder.builders.ProjectBuilder
import io.tolgee.development.testDataBuilder.builders.TestDataBuilder
import io.tolgee.development.testDataBuilder.builders.UserAccountBuilder
import io.tolgee.model.enums.OrganizationRoleType
import io.tolgee.model.enums.ProjectPermissionType
import io.tolgee.model.enums.TranslationState

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

      DemoProjectData.keys.forEach { keyName ->
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
