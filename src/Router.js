import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import HomePage from "./pages/HomePage";

export default function Router({ theme, setTheme, setConfig }) {
    return (
        <BrowserRouter>
            <NavBar theme={theme} setTheme={setTheme} setConfig={setConfig} />
            <Switch>
                <Route path="/">
                    <HomePage theme={theme} />
                </Route>
            </Switch>
            <Footer theme={theme} />
        </BrowserRouter>
    );
}
