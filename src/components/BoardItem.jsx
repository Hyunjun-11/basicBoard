import "./BoardItem.css";

import { useNavigate } from "react-router-dom";
import { BoardIdContext } from "../App";
import { useContext } from "react";

const BoardItem = ({ id, title, content, date }) => {
  const getId = useContext(BoardIdContext);
  const navigate = useNavigate();
  const clickHandler = (id) => {
    getId(id);
    navigate(`/info/${id}`);
  };

  return (
    <div
      onClick={() => {
        clickHandler(id);
      }}
      className="Board"
    >
      <div className="title">{title}</div>
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
    </div>
  );
};

export default BoardItem;
