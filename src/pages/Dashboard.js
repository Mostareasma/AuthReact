import React, {Component} from 'react';
import PrivateRoute from "../routes/PrivateRoute";
import Header from "../components/Header";
import Logout from "../components/auth/Logout";

export default function (){
        return (
            <PrivateRoute>
                <Header/>
                <Logout/>
            </PrivateRoute>
        );
}

