import React, { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../UserContext/UserContext';
import swal from 'sweetalert';
const ResetPassword = (props) => {

    const { resetPassword } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [err, setError] = useState('');
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleResetPassword = () => {
        resetPassword(email)
            .then(() => {
                swal("Reset Email Sent!", "Check Your Email", "success");
                setError('');
                props.onHide();
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                // ..
            });
    }
    console.log(email);

    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className='text-danger' id="contained-modal-title-vcenter">
                        <h2> Reset Password</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Enter Your email and click on Send link button.</p>
                    <input onBlur={handleEmail} type="email" name="" className='form-control' id="" />
                    <p>
                        {err && err}
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button onClick={props.onHide}>Send Link</Button> */}
                    <Button onClick={handleResetPassword}>Send Link</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ResetPassword;