import React from 'react';
import {LazyComponent} from "./LazyComponent";

//export const PolygloatProvider = LazyComponent(import("polygloat-react"), "PolygloatProvider");
export const PolygloatProvider = LazyComponent(import("./ProviderModule"), "PolygloatProviderInner");

export const T = LazyComponent(import("polygloat-react"), "T");
