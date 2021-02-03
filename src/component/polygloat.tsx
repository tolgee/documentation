import React from 'react';
import {LazyComponent} from "./LazyComponent";

//export const PolygloatProvider = LazyComponent(import("polygloat-react"), "PolygloatProvider");
//export const PolygloatProvider = LazyComponent(import("@polygloat/react"), "PolygloatProvider");

export const T = (props) => <>{props.children}</>//LazyComponent(import("@polygloat/react"), "T");
