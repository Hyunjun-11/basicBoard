import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Info from "./pages/Info";

import { useRef, useState, useReducer } from "react";
import Board from "./exam/Board";
import SignUp from "./exam/SignUp";
import Update from "./pages/Update";

const data = [
  {
    id: 1,
    title: "제목",
    date: "2024-04-04",
    content: "내용",
  },
];

function test(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) => (item.id === action.id ? action.data : item));
    case "DELETE":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}

function App() {
  const [board, dispatch] = useReducer(test, []);

  const onCreate = (data) => {
    dispatch({
      type: "CREATE",
      data: {
        id: board.length + 1,
        title: data.title,
        content: data.content,
        date: data.date,
      },
    });
  };
  const onUpdate = (data) => {
    dispatch({
      type: "UPDATE",
      data: {
        data,
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      data: { id },
    });
  };

  const [id, setId] = useState();

  const boardItemGetId = (id) => {
    setId(id);
  };

  const boardInfo = board.find((item) => item.id === id);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home data={board} getId={boardItemGetId} />} />
        <Route path="/board" element={<Board />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/info/:id" element={<Info data={boardInfo} />}></Route>
        <Route path="/create" element={<Create onCreate={onCreate} />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
      </Routes>
    </>
  );
}

export default App;
