import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header.js";
import Input from "./Components/Input.js";
import PostList from "./Components/PostList.js";
import Home from "./Components/Home.js";
import Edit from "./Components/Edit.js";
import Footer from "./Components/Footer.js";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/list" element={<PostList />} />
          <Route path="/input" element={<Input />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
