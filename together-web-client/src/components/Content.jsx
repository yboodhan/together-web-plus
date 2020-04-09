import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Import components
import Home from "./Home"; // Contains homepage
import UserHome from "./UserHome"; // Contains homepage when user logs in (browse, video lists, etc.)
import WatchChat from "./WatchChat"; // Contains video and chat features
import Profile from "./Profile"; // Contains user profile page
import Error from "./Error"; // Contains ERROR page

const Content = props => {
    return (
        <div className="mx-4 my-4">
        <Switch>

            <Route exact path="/" render={
                () => <Home/>
            } />

            <Route path="/home" render={
                () => <UserHome/>
            }/>

            <Route path="/profile" render={
                () => <Profile/>
            }/>

            <Route path="/together" render={
                () => <WatchChat/>
            }/>

            <Route>
                <Error />
            </Route>

        </Switch>
        </div>
    )
}

export default Content;