import "./Home.css";
import Button from "../components/Button";
import BoardList from "../components/BoardList";
import { useNavigate } from "react-router-dom";
import { useContext, useReducer, useState } from "react";
import { BoardStateContext } from "../App";

function selectReducer(state, action) {
  let sortedState;
  switch (action.type) {
    case "DESC":
      sortedState = [...state].sort((a, b) => {
        return b.id - a.id;
      });
      return sortedState;
    case "ASC":
      sortedState = [...state].sort((a, b) => {
        return a.id - b.id;
      });
      return sortedState;
    default:
      return state;
  }
}

const boardListSortOption = [
  {
    value: "DESC",
    name: "최신순",
  },
  {
    value: "ASC",
    name: "오래된순",
  },
];

const Home = ({ onSearch }) => {
  const data = useContext(BoardStateContext);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const [board, selectDispatch] = useReducer(selectReducer, data);

  const selectHandler = (e) => {
    selectDispatch({ type: e.target.value });
  };

  const [search, setSearch] = useState("");
  const searchHanddler = (e) => {
    setSearch(e.target.value);
  };
  const searchSubmit = (str) => {
    onSearch(str);
  };

  return (
    <div className="home">
      <div className="home_title">게시판 제목</div>

      <div className="action_tab">
        <div className="sort">
          <select onChange={selectHandler}>
            {boardListSortOption.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="create">
          <Button type={"PRIMARY"} text={"작성하기"} onClick={() => handleNavigate("/create")} />
        </div>
      </div>

      <div className="list">
        <BoardList data={board} />
      </div>
      {/* <div>페이징</div> */}

      <div className="search">
        <input className="input" type="text" placeholder="검색어를 입력해주세요." onChange={searchHanddler} />
        <div className="button">
          <Button
            type={"SEARCH"}
            text={"검색"}
            onClick={() => {
              searchSubmit(search);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
