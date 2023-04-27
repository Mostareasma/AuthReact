import React, {Component, useState} from 'react';
import {Alert, Button, Col, Container, Form, Row} from "react-bootstrap";
import axios from "axios";
import {axiosInstance} from "../../service/apiService";
import {Navigate} from "react-router-dom";

export default function RegisterForm(){


    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('male');
    const [error, setError] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [usernameInvalidity, setUsernameInvalidity] = useState(false);
    const [passwordInvalidity, setPasswordInvalidity] = useState(false);
    const [emailInvalidity, setEmailInvalidity] = useState(false);
    const [phoneInvalidity, setPhoneInvalidity] = useState(false);

    const [jwt, setJwt] = useState(localStorage.getItem('AccessToken'));

    if(jwt) {
        return <Navigate to="/"/>
    }

    const handleChange = (event) => {
        setGender(event.target.value)
    }



    const handleSubmit=async (e) => {
        e.preventDefault()

        const data = {
            username,
            email,
            phone,
            password,
            gender
        }
        if(validate(data)) {
            axiosInstance.post('/auth/register', data)
                .then(response =>{
                    setError(null)
                    let token = response.data.token;
                    localStorage.setItem("AccessToken", token)
                    axios.defaults.headers.common['Authorization'] =  token
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

        const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i

        const pwdPattern =/(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.])(?=.*[A-Z])(?=.*[a-z]).*$/i
        const phonePattern = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/

        if(!values.username){
            errors.username="*Username required!*"
            setUsernameInvalidity(true)
        }else {
            errors.username = null
            setUsernameInvalidity(false)
        }
        if (!pwdPattern.test(values.password)){
            if (!values.password){
                errors.password="*Password required!*"
            }else {
                errors.password = "*The password length must be greater than or equal to 8" +
                    "and must contain one or more uppercase characters" +
                    ", one or more lowercase characters" +
                    ", one or more numeric values" +
                    "and one or more special characters*"
            }
            setPasswordInvalidity(true)
        }else {
            errors.password = null
            setPasswordInvalidity(false)
        }

        if (!values.email){
            errors.email="*Email required!*"
            setEmailInvalidity(true)
        }else if(!emailPattern.test(values.email)) {
            errors.email="*Email is invalid!*"
        }else {
            errors.email = null
            setEmailInvalidity(false)
        }

        if (!values.phone){
            errors.phone="*Phone number required!*"
            setPhoneInvalidity(true)
        }else if(!phonePattern.test(values.phone)) {
            errors.phone="*Phone number is invalid!*"
        }else {
            errors.phone = null
            setPhoneInvalidity(false)
        }

        if(errors.username==null && errors.password==null && errors.email==null && errors.phone==null ) {
            isSubmit=true
        }
        setFormErrors(errors)

        return isSubmit

    }

    return(
            <Form onSubmit={handleSubmit} className="authForm m-auto p-5 col-md-6 border shadow-sm rounded-3 bg-white align-middle " >

                {error?<p className="text-danger text-sm">*{error}*</p>:null}

                <Form.Group className="mb-3" >
                    <Form.Label>Username</Form.Label>
                    <Form.Control isInvalid={usernameInvalidity}  onChange={(e)=>setUsername(e.target.value)} type="text" placeholder="Enter username" />

                    <Form.Control.Feedback type="invalid">
                        {formErrors.username}
                    </Form.Control.Feedback>

                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control   isInvalid={emailInvalidity}  type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />

                    <Form.Control.Feedback type="invalid">
                        {formErrors.email}
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>

                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  isInvalid={passwordInvalidity}  onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />

                    <Form.Control.Feedback type="invalid">
                        {formErrors.password}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control isInvalid={phoneInvalidity}  type="text" onChange={ (e)=>setPhone(e.target.value)} placeholder="EX. (123) 456-7890" />

                    <Form.Control.Feedback type="invalid">
                        {formErrors.phone}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Your Gender</Form.Label>
                    <Row>
                        <Col>
                            <Form.Check
                                type="radio"
                                id="gender"
                                label="Male"
                                value={"male"}
                                checked={gender === 'male'}
                                onChange={handleChange}
                            />

                        </Col>
                        <Col>
                            <Form.Check
                                type="radio"
                                id="gender"
                                label="Female"
                                value="female"
                                checked={gender ==='female'}
                                onChange={handleChange}
                            />

                        </Col>
                    </Row>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
    )
}

