import "./Board.css";
import { useState } from "react";
import { useReducer } from "react";

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "CREATE":
      return [...state, action.payload];
    default:
      return state;
  }
}

const BoardReducer = () => {
  const [board, dispatch] = useReducer(reducer, []);
  const [boardItem, setBoardItem] = useState({
    title: "",
    author: "",
    date: "",
    content: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setBoardItem({
      ...boardItem,
      [name]: value,
    });
  };

  const submit = () => {
    console.log(boardItem);
    dispatch({ type: "CREATE", payload: boardItem });
  };
  return (
    <div className="Create">
      <div className="Home">BoardReducer</div>
      <div className="title">
        <div>제목</div>
        <input name="title" type="text" onChange={onChange} />
      </div>
      <div className="author">
        <div>작성자</div>
        <input name="author" type="text" onChange={onChange} />
      </div>
      <div className="date">
        <div>날짜</div>
        <input name="date" type="date" onChange={onChange} />
      </div>
      <div className="content">
        <div>내용</div>
        <textarea rows="15" name="content" onChange={onChange} />
      </div>
      <button onClick={submit}> 결과보기</button>
      <div>
        {board.map((item, index) => (
          <div key={index}>
            <div>제목: {item.title}</div>
            <div>작성자: {item.author}</div>
            <div>날짜: {item.date}</div>
            <div>내용: {item.content}</div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardReducer;
