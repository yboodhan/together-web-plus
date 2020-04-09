import React from 'react';

import { Button, Form, Label, Input } from 'reactstrap';

import {ReactComponent as HomeImage} from '../static/network.svg';

import SignIn from './SignIn';

const style = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent:'center',
    flexWrap: 'wrap'
}

const Home = props => {
    return (
        <div>
            <SignIn />
            <p className="logo">Together Web</p>
            <p className="text-center subheading">Watch. Chat. Listen. Together.</p>
            <p className="text-center slogan">Anywhere. Anytime. No hassle.</p>
            <div className="py-3" style={style}>
                <HomeImage width={700}/>
            </div>
            <Form style={style} inline>
                <Label for="email" hidden>Email</Label>
                <Input className="m-2" type="email" name="email" id="email" placeholder="Email address"/>
                <Button className="my-2 button" type="submit">Sign up!</Button>
            </Form>
        </div>
    )
}

export default Home