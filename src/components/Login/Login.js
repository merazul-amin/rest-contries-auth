import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import ResetPassword from '../ResetPassword/ResetPassword';
import { AuthContext } from '../UserContext/UserContext';
const Login = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const { logIn } = useContext(AuthContext);


    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                navigate(from, { replace: true });
                form.reset();
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='w-50 mx-auto'>

            <ResetPassword
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <h1>Login Now</h1>
            <Form onSubmit={handleLogin}>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <p>Forgot password? <Button variant="link" onClick={() => setModalShow(true)}>
                        Reset Now.
                    </Button>  </p>
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;