import "./BoardItem.css";

import { useNavigate } from "react-router-dom";

const BoardItem = ({ id, title, content, date, getId }) => {
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
