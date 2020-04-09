import React, { useState } from 'react';
import { Button, Input, Form, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const SignIn = props => {
    let [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    
    return (
        <div>
          <Button onClick={toggle} size="sm" className="float-right button mr-4">Sign In</Button>
          <Modal isOpen={modal} toggle={toggle}>

            <ModalBody style={{padding: '1em 3em 3em 3em'}}>
                <h1 className="text-center" style={{paddingTop: '1em'}}>Sign In</h1>
                <Form>
                    <FormGroup style={{paddingTop: '1em'}}>
                        <Label for="email"><small>EMAIL</small></Label>
                        <Input type="email" name="email" id="email" placeholder="Email address" />
                    </FormGroup>
                    <FormGroup style={{padding: '1em 0em 1em 0em'}}>
                        <Label for="password"><small>PASSWORD</small></Label>
                        <Input type="password" name="password" id="password" placeholder="Password" />
                    </FormGroup>
                <Button className="button float-right" type="submit">Sign In</Button>
                </Form>
            </ModalBody>

            <ModalFooter style={{justifyContent: 'center'}}>
                <p>Don't have an account? </p>
                <a>Create an account today!</a>
            </ModalFooter>

          </Modal>
        </div>
      );
    }
    
export default SignIn;