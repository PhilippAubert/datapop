import React from "react";
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from "react-router-dom";

import Header from "./Components/Header/Header.jsx";
import Input from "./Components/Input.jsx";
import PostList from "./Components/PostList.jsx";
import Home from "./Components/Home.jsx";
import Edit from "./Components/Edit.jsx";
import Footer from "./Components/Footer.jsx";

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
