import React, {Component, useState} from 'react';
import {Navigate, Route} from "react-router-dom";
import {decode, verify} from "jsonwebtoken";

export default function  PrivateRoute({ children}){

    function hasJWT() {
        let flag = false;

        //check user has JWT token

        const token= JSON.parse(localStorage.getItem("AccessToken"))

        console.log(token)

            const token = localStorage.getItem('token');
            if (token) flag=true

        return flag
    }


    return (
              hasJWT() ?
                  children : <Navigate to="/login" />

    )

}

