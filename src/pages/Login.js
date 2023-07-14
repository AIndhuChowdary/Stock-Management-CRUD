import React, { useState } from 'react';
import { Card, Form, Button, Image } from 'react-bootstrap';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
function Login(props) {
    const [validate, setValidated] = useState(false);
    const [user, setUser] = useState(null);
    //Checking if user is logged in.
    firebase.auth().onAuthStateChanged((u) => {
        if (u) {
            setUser(u)
        } else {
            setUser(null);
        }
    });
    const LoginButtonPressed = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        firebase.auth().signInWithEmailAndPassword(email.value, password.value).then((userCredentails) => {
            //SignedIn User
            var user = userCredentails.user;
            alert("Login Successful")
            setUser(user);
            setValidated(true);
        }).catch((e) => {
            alert(e.message);
            setValidated(true);
        })
    }
    const LogoutButtonPressed = () => {
        firebase.auth().signOut().then(() => {
            //Signout Successful
            alert("Logout Successful");
            setUser(null);
            setValidated(false);
        }).catch((e) => {
            alert(e.message);
        })
    }
    return (
        <>
            {(user === null) && <Card style={{ margin: 24, }}>
                <Card.Header>
                    <Image src={'https://static.wixstatic.com/media/05d5b9_f3960b4ed1ba4d60886fa2eb6ea88688~mv2.jpg/v1/fill/w_144,h_144,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/B.jpg'} style={{ width: 70, marginBottom: 8 }} />
                    <h4>Admin Login</h4>
                    <p style={{ marginTop: 8, fontSize: 12, color: '#A1A1A1' }}>If you're an admin of BlackBox-Ai please login below. If you don't have  an account please contact your administrator to get a login.</p>
                </Card.Header>
                <Card.Body>
                    <Form noValidate validated={validate} onSubmit={LoginButtonPressed}>
                        <Form.Group className='mb-3' controlId='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder='Enter admin email' size='md' />
                            <Form.Control.Feedback type='invalid'>Email is required.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder='Enter password' size='md' />
                            <Form.Control.Feedback type='invalid'>Password is required.</Form.Control.Feedback>
                        </Form.Group>
                        <Button variant='primary' type='submit' size='md' style={{ fontWeight: 'bold' }}>
                            Login ❯
                        </Button>
                        {/* <p>{user.email}</p> */}
                    </Form>
                </Card.Body>
                <Card.Footer>
                    <a href="/" style={{ marginTop: 8, fontSize: 12, }}>← Back to homepage</a>
                </Card.Footer>
            </Card>}
            {(user !== null) && <div style={{ margin: 24 }}>
                <div style={{ textAlign: 'center', margin: '50px auto', maxWidth: '400px' }}>
                    <p style={{ fontSize: '18px', marginBottom: '20px' }}>You're logged in successfully. Go to</p>
                    <p>
                        <a href="/dashboard" style={{ display: 'inline-block', textDecoration: 'none', marginRight: '10px' }}>
                            <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Dashboard</button>
                        </a>
                        <a style={{ display: 'inline-block', textDecoration: 'none' }}>
                            <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }} variant="primary" onClick={LogoutButtonPressed}>Click here to Logout</button>
                        </a>
                    </p>
                </div>




            </div>}
        </>
    );
}
export default Login;  