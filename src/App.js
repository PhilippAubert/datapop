import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header.js";
import Input from "./Components/Input.js";
import UserList from "./Components/UserList.js";
import Home from "./Components/Home.js";
import Footer from "./Components/Footer.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/list">
            <UserList />
          </Route>
          <Route path="/input">
            <Input />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
