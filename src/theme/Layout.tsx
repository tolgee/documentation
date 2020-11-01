// Note: importing from "@theme/Footer" would fail due to the file importing itself
import OriginalLayout from '@theme-original/Layout';
import React from 'react';
import {PolygloatProvider} from "polygloat-react";
import {UI} from "polygloat/ui";

export default function Layout(props) {
    return (
        <>
            <PolygloatProvider
                apiUrl={process.env.polygloatApiUrl}
                apiKey={process.env.polygloatApiKey}
                ui={process.env.polygloatWithUI === "true" && UI}
            >
                <OriginalLayout {...props} />
            </PolygloatProvider>

        </>
    );
}