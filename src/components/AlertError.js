import React, {Component} from 'react';
import {Alert} from "react-bootstrap";

export  default function AlertError (props){

    return (
        <Alert key="danger" variant="danger">
            {props.message}
        </Alert>
    );

}
