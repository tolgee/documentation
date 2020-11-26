import OriginalLayout from '@theme-original/Layout';
import React, {useEffect, useState} from 'react';
import {PolygloatProvider} from "../component/polygloat";
import {UI} from "@polygloat/ui";

// noinspection JSUnusedGlobalSymbols
export default function Layout(props) {
    const [uiWrapped, setUiWrapped] = useState({ui: null} as { ui: typeof UI });

    useEffect(() => {
        process.env.polygloatWithUI === "true" && import("@polygloat/ui").then(ui => {
            setUiWrapped({ui: ui.UI});
        });
    }, []);

    if (!uiWrapped.ui) {
        return "Loading...";
    }

    return (
        <>
            <PolygloatProvider
                apiUrl={process.env.polygloatApiUrl}
                apiKey={process.env.polygloatApiKey}
                ui={process.env.polygloatWithUI === "true" && uiWrapped.ui}
                inputPrefix="%-%pglt:"
            >
                <OriginalLayout {...props} />
            </PolygloatProvider>

        </>
    );
}