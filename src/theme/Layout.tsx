import OriginalLayout from '@theme-original/Layout';
import React, {useEffect, useState} from 'react';
//import {TolgeeProvider} from "../component/tolgee";
//import {UI} from "@tolgee/ui";

// noinspection JSUnusedGlobalSymbols
export default function Layout(props) {
    //const [uiWrapped, setUiWrapped] = useState({ui: null} as { ui: typeof UI });

    /* useEffect(() => {
         process.env.tolgeeWithUI === "true" && import("@tolgee/ui").then(ui => {
             setUiWrapped({ui: ui.UI});
         });
     }, []);

     if (!uiWrapped.ui) {
         return "Loading...";
     }
 */
    /* return (
         <>
             <TolgeeProvider
                 apiUrl={process.env.tolgeeApiUrl}
                 apiKey={process.env.tolgeeApiKey}
                 ui={process.env.tolgeeWithUI === "true" && uiWrapped.ui}
                 inputPrefix="%-%pglt:"
             >
                 <OriginalLayout {...props} />
             </TolgeeProvider>
         </>
     );*/

    return (<OriginalLayout {...props} />)
}