import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import HomePage from "./pages/HomePage";

export default function Router({ theme, setTheme }) {
    return (
        <BrowserRouter>
            <NavBar theme={theme} setTheme={setTheme} />
            <Switch>
                <Route exact path="/">
                    <HomePage theme={theme} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
