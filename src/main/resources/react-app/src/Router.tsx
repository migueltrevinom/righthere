import * as React from 'react';
// import { Router, Route } from 'react-router'
import { Route, Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Index from './pages/index';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Classroom from './Components/Classroom';
import AttendanceList from './Components/AttendanceList';
import SetupClassRoom from './Components/SetupClassRoom';
// import Schedule from "./Schedule.js"

const history = createHistory();

class ReactRouter extends React.Component {

    render() {
        return(
            <Router history={history}>
                <Switch>
                    <Route path="/index" component={Index} />
                    <Route path="/home" component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/classroom/:classroomId" component={Classroom} />
                    <Route path="/classroom/:classroomId/attendance-list/:listId" component={AttendanceList} />
                    <Route path="/setup/classroom/:id" component={SetupClassRoom} />

                    {/* 404 not fond page, make sure it stay at bottom */}
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        );
    }

}

// Hard coded pages (TEMP!)
const NotFound = () => <h1>404.. This page is not found!</h1>;

export default ReactRouter;