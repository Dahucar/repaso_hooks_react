import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { NavBar } from './pages/NavBar';
import { AboutPage } from './pages/AboutPage';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { ErrorPage } from './pages/ErrorPage';

export const AppRouter = () => {
    return (
        <Router>
            <NavBar />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={ HomePage } />
                    <Route exact path="/login" component={ LoginPage } />
                    <Route exact path="/about" component={ AboutPage } />
                    <Route component={ ErrorPage } />
                </Switch>
            </div>
        </Router>
    );
}
