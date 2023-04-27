import React, {Component} from 'react';
import Header from "../components/Header";
import Logout from "../components/auth/Logout";

export default function ( children ){
    return (
        <>
            <Header/>
            <Logout/>
            {children}

        </>
    );
}

