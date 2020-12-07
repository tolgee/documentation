module.exports = {
    someSidebar: [
        {type: 'doc', id: 'motivation'},
        {
            label: "Get started",
            type: "category",
            items: [
                'get_started/hello_world',
                'get_started/preparing_for_production',
                'get_started/adding_loading_overlay',
                'get_started/translating_programmatically'
            ],
            collapsed: false
        },
        {
            id: "understanding_polygloat",
            type: "doc"
        },
        {
            label: "Using with Npm", type: "category", items: [
                'using_with_npm/installation',
            ]
        },
        {
            label: "Using with React", type: "category", items: [
                'using_with_react/installation',
                'using_with_react/translating'
            ],
            collapsed: false
        },
        {
            label: "Using with Angular", type: "category", items: [
                'using_with_angular/installation',
                'using_with_angular/translating'
            ]
        },
        {
            label: "Running server", type: "category", items: [
                'running_server/running_with_docker',
                'running_server/running_with_java',
                'running_server/configuration',
            ]
        },
        {
            label: "Using Polygloat App", type: "category", items: [
                'web_app/creating_repository',
                'web_app/obtaining_api_key',
                'web_app/exporting_translations'
            ]
        }
    ],
};
