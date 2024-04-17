import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Info from "./pages/Info";

import { useState } from "react";
import Board from "./exam/Board";
import SignUp from "./exam/SignUp";

function App() {
  const [board, setBoard] = useState([]);
  const [id, setId] = useState();

  const boardItemGetId = (id) => {
    setId(id);
  };
  const board2 = board.find((item) => item.id === id);

  const onCreate = (data) => {
    const newBoard = {
      id: board.length + 1,
      title: data.title,
      content: data.content,
      date: data.date,
    };
    setBoard([newBoard, ...board]);
  };

  const onUpdate = (id, newData) => {
    const updateBoard = board.map((item) => (item.id === id ? { ...item, ...newData } : item));
    setBoard(updateBoard);
  };

  const onDelete = (id) => {
    const deleteBoard = board.filter((item) => item.id !== id);
    setBoard(deleteBoard);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home data={board} getId={boardItemGetId} />} />
        <Route path="/board" element={<Board />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/info/:id" element={<Info data={board2} />}></Route>
        <Route path="/create" element={<Create onCreate={onCreate} />}></Route>
      </Routes>
    </>
  );
}

export default App;
