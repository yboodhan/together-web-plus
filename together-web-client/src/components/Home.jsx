import React from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

import {ReactComponent as HomeImage} from '../static/network.svg';

const style = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent:'center',
    flexWrap: 'wrap'
}

const Home = props => {
    return (
        <div>
            <h1 className="logo">Together Web</h1>
            <p className="text-center subheading">Watch. Chat. Listen. Together.</p>
            <p className="text-center slogan">Anywhere. Anytime. No hassle.</p>
            <div className="py-3" style={style}>
                <HomeImage width={700}/>
            </div>
            <Form style={style} inline>
                <Label for="email" hidden>Email</Label>
                <Input className="m-2" type="email" name="email" id="email" placeholder="Email address"/>
                <Button className="my-2 button">Sign up!</Button>
            </Form>
        </div>
    )
}

export default Home