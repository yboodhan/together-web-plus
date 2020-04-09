import React from 'react';

import { Button, Form, Label, Input, Row, Col } from 'reactstrap';

import {ReactComponent as HomeImage} from '../static/network.svg';
import {ReactComponent as ProfileImage} from '../static/user_profile.svg';
import {ReactComponent as WatchImage} from '../static/watch.svg';
import {ReactComponent as ChatImage} from '../static/chat.svg';
import {ReactComponent as ListenImage} from '../static/music.svg';


import SignIn from './SignIn';

const style = {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent:'center',
    flexWrap: 'wrap'
}

const homepageContent = [
    {
        heading: "Create",
        description: "Make and personalize your profile with a custom watchlist. Open rooms to watch, chat, or listen together.",
        image: <ProfileImage className="img-fluid" height={150}/>
    },
    {
        heading: "Watch",
        description: "Find and view Youtube videos with your friends!",
        image: <WatchImage className="img-fluid" height={150}/>
    },
    {
        heading: "Chat",
        description: "Never miss a noteworthy moment by talking with your watch party live.",
        image: <ChatImage className="img-fluid" height={150}/>
    },
    {
        heading: "Listen",
        description: "Keep up with the latest music and listen to tracks recommended by your friends.",
        image: <ListenImage className="img-fluid" height={150}/>
    }
]

const Home = props => {
    let productDescription = homepageContent.map ( (feature, index) => {
        return (
            <div>
                <hr/>
                <Row className="px-5 py-5">
                    <Col sm="12" md={{ size: 4, offset: 1 }} style={style}>
                        {feature.image}
                    </Col>
                    <Col sm="12" md={{ size: 4, offset: 1 }}>
                        <p className="logo">{feature.heading}</p>
                        <div>{feature.description}</div>
                    </Col>
                </Row>
            </div>
        );
    })

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
                <Input className="mb-5 mx-2" type="email" name="email" id="email" placeholder="Email address"/>
                <Button className="mb-5 button" type="submit">Sign up!</Button>
            </Form>

            {productDescription}
        </div>
    )
}

export default Home