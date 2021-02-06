import React from 'react';
import {LazyComponent} from "./LazyComponent";

//export const TolgeeProvider = LazyComponent(import("tolgee-react"), "TolgeeProvider");
//export const TolgeeProvider = LazyComponent(import("@tolgee/react"), "TolgeeProvider");

export const T = (props) => <>{props.children}</>//LazyComponent(import("@tolgee/react"), "T");
