import React from 'react';
import OriginalNavbarItem from '@theme-original/NavbarItem';
import {T} from "../component/tolgee";

export default function NavbarItem(props) {
    const newProps = props;//{...props, label: <T>{`Header - ${props.label}`}</T>}
    return (
        <>
            <OriginalNavbarItem {...newProps} />
        </>
    );
}