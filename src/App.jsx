import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Info from "./pages/Info";

import { useRef, useState, useReducer, createContext } from "react";
import Board from "./exam/Board";
import SignUp from "./exam/SignUp";
import Update from "./pages/Update";

function test(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) => (item.id === action.id ? action.data : item));
    case "DELETE":
      return state.filter((item) => item.id !== action.id);
    case "SEARCH":
      console.log(action.data.str);
      if (action.data.str === "") return state;
      return state.filter((item) => String(item.title).includes(String(action.data.str)));
    default:
      return state;
  }
}

export const BoardStateContext = createContext();
export const BoardIdContext = createContext();

function App() {
  const [board, dispatch] = useReducer(test, []);

  const [id, setId] = useState();
  const idRef = useRef(1);

  const onCreate = (data) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
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
        id: data.id,
        title: data.title,
        content: data.content,
        date: data.date,
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      data: { id },
    });
  };

  const onSearch = (str) => {
    dispatch({
      type: "SEARCH",
      data: { str },
    });
  };

  const boardItemGetId = (id) => {
    setId(id);
  };

  const boardInfo = board.find((item) => item.id === id);

  return (
    <>
      <BoardStateContext.Provider value={board}>
        <BoardIdContext.Provider value={boardItemGetId}>
          <Routes>
            <Route path="/" element={<Home onSearch={onSearch} />} />
            <Route path="/board" element={<Board />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/info/:id" element={<Info data={boardInfo} />}></Route>
            <Route path="/create" element={<Create onCreate={onCreate} />}></Route>
            <Route path="/update/:id" element={<Update />}></Route>
          </Routes>
        </BoardIdContext.Provider>
      </BoardStateContext.Provider>
    </>
  );
}

export default App;
