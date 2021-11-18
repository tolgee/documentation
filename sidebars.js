module.exports = {
  someSidebar: [
    { type: "doc", id: "what_is_tolgee" },
    {
      label: "Tolgee Server and Web application",
      type: "category",
      items: [
        "server_and_web_app/introduction",
        {
          label: "Usage",
          type: "category",
          items: [
            "server_and_web_app/creating_project",
            "server_and_web_app/integration",
            "server_and_web_app/managing_api_keys",
            "server_and_web_app/exporting_translations",
          ],
        },
        {
          label: "Self hosting",
          type: "category",
          items: [
            "server_and_web_app/self_hosting/running_with_docker",
            "server_and_web_app/self_hosting/running_with_java",
            "server_and_web_app/self_hosting/configuration",
          ],
        },
      ],
    },
    {
      label: "Tolgee for Web",
      collapsed: false,
      type: "category",
      items: [
        {
          label: "Get started",
          type: "category",
          items: [
            "web/get_started/hello_world",
            "web/get_started/preparing_for_production",
            "web/get_started/adding_loading_overlay",
            "web/get_started/translating_imperatively",
            "web/get_started/providing_default_value",
            "web/get_started/parameter_interpolation",
          ],
          collapsed: false,
        },
        {
          id: "web/understanding_tolgee_for_web",
          type: "doc",
        },
        {
          id: "web/configuration",
          type: "doc",
        },
        {
          id: "web/automated_screenshot_generation",
          type: "doc",
        },
        {
          label: "Integrations",
          collapsed: false,
          type: "category",
          items: [
            {
              label: "Using with Npm",
              type: "category",
              items: ["web/using_with_npm/installation"],
            },
            {
              label: "Using with React",
              type: "category",
              items: [
                "web/using_with_react/installation",
                "web/using_with_react/translating",
                "web/using_with_react/switching_languages",
                "web/using_with_react/preparing_for_production",
                "web/using_with_react/advanced_translating",
                {
                  label: "Server Side Rendering (SSR)",
                  type: "category",
                  items: [
                    "web/using_with_react/ssr/ssr",
                    "web/using_with_react/ssr/using_with_next",
                    "web/using_with_react/ssr/using_with_gatsby",
                  ],
                },
                "web/using_with_react/api",
              ],
            },
            {
              label: "Using with Angular",
              type: "category",
              items: [
                "web/using_with_angular/installation",
                "web/using_with_angular/translating",
                "web/using_with_angular/switching_language",
                "web/using_with_angular/angular_preparing_for_production",
              ],
            },
            {
              label: "Using with Vue",
              type: "category",
              items: [
                "web/using_with_vue/installation",
                "web/using_with_vue/translating",
                "web/using_with_vue/switching_languages",
                "web/using_with_vue/preparing_for_production",
                "web/using_with_vue/advanced_translating",
                "web/using_with_vue/api"
              ],
            },
            {
              label: "Using with Svelte",
              type: "category",
              items: [
                "web/using_with_svelte/installation",
                "web/using_with_svelte/translating",
                "web/using_with_svelte/switching_language",
                "web/using_with_svelte/preparing_for_production",
                "web/using_with_svelte/advanced_translating",
                "web/using_with_svelte/api",
              ],
            },
            {
              id: "web/using_with_php",
              type: "doc",
            },
            {
              id: "web/using_with_dart",
              type: "doc",
            },
          ],
        },
      ],
    },
    { type: "doc", id: "icu_message_format" },
  ],
};
