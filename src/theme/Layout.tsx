import OriginalLayout from '@theme-original/Layout';
import React, {useEffect, useState} from 'react';
import {PolygloatProvider} from "../component/polygloat";

// noinspection JSUnusedGlobalSymbols
export default function Layout(props) {
    const [UI, setUI] = useState({ui: null})

    useEffect(() => {
        process.env.polygloatWithUI === "true" && import("polygloat/ui").then(ui => {
            setUI({ui: ui.UI});
        });
    }, []);

    if(!UI.ui){
        return "Loading...";
    }

    return (
        <PolygloatProvider
            apiUrl={process.env.polygloatApiUrl}
            apiKey={process.env.polygloatApiKey}
            ui={UI.ui}
        >
            <OriginalLayout {...props} />
        </PolygloatProvider>
    );
}