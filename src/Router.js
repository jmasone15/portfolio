import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import HomePage from "./pages/HomePage";

export default function Router({ theme, setTheme, setBackground }) {
    return (
        <BrowserRouter>
            <NavBar theme={theme} setTheme={setTheme} setBackground={setBackground} />
            <Switch>
                <Route exact path="/">
                    <HomePage theme={theme} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
