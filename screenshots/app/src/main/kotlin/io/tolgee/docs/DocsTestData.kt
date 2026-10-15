package io.tolgee.docs

import io.tolgee.development.testDataBuilder.builders.LanguageBuilder
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
  val shop: ProjectBuilder
  lateinit var english: LanguageBuilder
  lateinit var czech: LanguageBuilder
  lateinit var german: LanguageBuilder
  lateinit var spanish: LanguageBuilder

  init {
    owner =
      root.addUserAccount {
        username = OWNER_USERNAME
        name = "Olivia Martin"
      }
    editor =
      root.addUserAccount {
        username = "noah@acme.test"
        name = "Noah Clark"
      }
    reviewer =
      root.addUserAccount {
        username = "emma@acme.test"
        name = "Emma Lee"
      }

    organization =
      root
        .addOrganization {
          name = "Acme Corp"
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

    shop =
      root.addProject {
        organizationOwner = organization.self
        name = "Acme Shop"
        aiTranslatorPromptDescription = "Online store selling home and garden products"
      }

    shop.build {
      english = addEnglish()
      czech = addCzech()
      german = addGerman()
      spanish =
        addLanguage {
          name = "Spanish"
          originalName = "Español"
          tag = "es"
        }

      addPermission {
        user = editor.self
        type = ProjectPermissionType.EDIT
      }
      addPermission {
        user = reviewer.self
        type = ProjectPermissionType.REVIEW
      }

      SHOP_KEYS.forEach { (keyName, texts) ->
        val key = addKey(keyName)
        texts.forEach { (tag, text) ->
          addTranslation {
            this.key = key.self
            this.language = getLanguageByTag(tag)!!.self
            this.text = text
            this.state = if (tag == "en" || tag == "cs") TranslationState.REVIEWED else TranslationState.TRANSLATED
          }
        }
      }

      addPrompt {
        name = "Formal tone"
        providerName = LLM_PROVIDER_NAME
        template =
          """
          Translate the text for an online store. Use formal address and keep product names untranslated.
          {{fragment.intro}}
          """.trimIndent()
      }
    }
  }

  companion object {
    const val OWNER_USERNAME = "olivia@acme.test"
    const val LLM_PROVIDER_NAME = "acme-openai"

    private val SHOP_KEYS: List<Pair<String, Map<String, String>>> =
      listOf(
        "checkout.button.pay" to
          mapOf("en" to "Pay now", "cs" to "Zaplatit", "de" to "Jetzt bezahlen", "es" to "Pagar ahora"),
        "checkout.title" to mapOf("en" to "Checkout", "cs" to "Pokladna", "de" to "Kasse", "es" to "Pago"),
        "cart.empty" to
          mapOf("en" to "Your cart is empty", "cs" to "Váš košík je prázdný", "de" to "Ihr Warenkorb ist leer"),
        "cart.items" to
          mapOf(
            "en" to "{count, plural, one {# item} other {# items}}",
            "cs" to "{count, plural, one {# položka} few {# položky} other {# položek}}",
          ),
        "product.add_to_cart" to
          mapOf(
            "en" to "Add to cart",
            "cs" to "Přidat do košíku",
            "de" to "In den Warenkorb",
            "es" to "Añadir al carrito",
          ),
        "product.out_of_stock" to mapOf("en" to "Out of stock", "cs" to "Vyprodáno"),
        "nav.home" to mapOf("en" to "Home", "cs" to "Domů", "de" to "Startseite", "es" to "Inicio"),
        "nav.garden" to mapOf("en" to "Garden", "cs" to "Zahrada", "de" to "Garten"),
        "account.welcome" to
          mapOf(
            "en" to "Welcome back, {name}!",
            "cs" to "Vítejte zpět, {name}!",
            "es" to "¡Bienvenido de nuevo, {name}!",
          ),
        "footer.newsletter" to mapOf("en" to "Subscribe to our newsletter"),
      )
  }
}
