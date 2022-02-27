import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../views/Home";
import Info from "../views/Info";


const Layout = () => {
    return <Router>
        <Navbar />
        <div className="container">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/info">
                    <Info />
                </Route>
                <Route render={() => <h1>Not Found</h1>}></Route>
            </Switch>
        </div>
    </Router>
};

export default Layout;