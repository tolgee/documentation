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
            ]
        },
        {
            id: "understanding_polygloat",
            type: "doc"
        },
        {
            label: "Using with npm", type: "category", items: [
                'using_with_npm/installation',
            ]
        },
        {
            label: "Using with React", type: "category", items: [
                'using_with_react/installation',
                'using_with_react/translating'
            ]
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
            ]
        },
        {
            label: "Using web application", type: "category", items: [
                'web_app/creating_repository',
                'web_app/obtaining_api_key',
                'web_app/exporting_translations'
            ]
        }
    ],
};
