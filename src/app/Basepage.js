import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About/About";
import Board from "./Board/Board";
import Main from "./Main/Main";

function Basepage(props) {
  return (
    <div className="basepage">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </div>
  );
}

export default Basepage;
