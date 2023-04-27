import React, {useState} from 'react'
import { Button, Col, Container, Form} from "react-bootstrap";
import axios from "axios";
import {axiosInstance} from "../../service/apiService";
import {Navigate} from "react-router-dom";
export default function LoginForm() {
    const [username , setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [usernameInvalidity, setUsernameInvalidity] = useState(false);
    const [passwordInvalidity, setPasswordInvalidity] = useState(false);

    const [jwt, setJwt] = useState(localStorage.getItem('AccessToken'));

    if(jwt) {
        return <Navigate to="/"/>
    }

    const  handleSubmit= async (e) => {
        e.preventDefault()

        const data = {
            username,
            password
        }
        if(validate(data)) {
            axiosInstance.post('/auth/login', data)
                .then(response =>{
                    setError(null)
                    let token = response.data.token;
                    localStorage.setItem("AccessToken", token)
                    setJwt(token)
                })
                .catch(err => {
                    setError(err.response.data)
                })
        }

    }

    const validate = (values)=>{
        let errors = {}
        let isSubmit = false
        if(!username){
            errors.username="Username required!"
            setUsernameInvalidity(true)
        }else {
            errors.username = null

            setUsernameInvalidity(false)
        }
        if (!password){
            errors.password="Password required!"
            setPasswordInvalidity(true)
        }else {
            errors.password = null

            setPasswordInvalidity(false)
        }

        if(errors.username==null && errors.password==null){
            isSubmit=true
        }
        setFormErrors(errors)

        return isSubmit
    }

    return (
            <Form onSubmit={handleSubmit} className="authForm m-auto p-5 col-md-6 border shadow-sm rounded-3 bg-white align-middle " >
                {error?<p className="text-danger text-sm">*{error}*</p>:null}

                <Form.Group className="mb-3" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control isInvalid={usernameInvalidity}  onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter username" />

                    <Form.Control.Feedback type="invalid">
                        {formErrors.username}
                    </Form.Control.Feedback>

                </Form.Group>


                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  isInvalid={passwordInvalidity}  onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />

                    <Form.Control.Feedback type="invalid">
                        {formErrors.password}
                    </Form.Control.Feedback>
                </Form.Group>

                <div className="text-secondary align-middle text-end text-primary text-xsm mb-1">Forgot Password?</div>

                <Button className="w-100" variant="primary" type="submit">
                    Login
                </Button>
                <div className="text-secondary  text-sm  m-3 align-middle text-center">or</div>
                <Button className="w-100 border" variant="light" type="submit">
                    Sign up
                </Button>
            </Form>
    )


}