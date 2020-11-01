// Note: importing from "@theme/Footer" would fail due to the file importing itself
import React from 'react';
import OriginalNavbarItem from '@theme-original/NavbarItem';
import {T} from "polygloat-react";

export default function NavbarItem(props) {
    const newProps = {...props, label: <T>{`Header - ${props.label}`}</T>}

    return (
        <>
            <OriginalNavbarItem {...newProps} />
        </>
    );
}