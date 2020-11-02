import React from "react";

export const LazyComponent = (moduleImport, exportedName) => (props) => {
    const InitialComponent = () => null;
    const [Component, setComponent] = React.useState<React.FunctionComponent>(() => InitialComponent);
    React.useEffect(() => {
        moduleImport.then((resolved) => {
            return setComponent(() => resolved[exportedName]);
        });
    }, []);
    return <Component {...props} />;
}