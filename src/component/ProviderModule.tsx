import {PolygloatProvider} from "polygloat-react";
import React from "react";

export const PolygloatProviderInner = (props) => {
    console.log(props);
    return <PolygloatProvider {...props} />
}