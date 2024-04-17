import "./Board.css";
import { useState, useReducer } from "react";

function 리듀서함수(state, action) {
  switch (action.type) {
    case "CREATE":
      return [...state, action.payload];
    case "UPDATE":
      return console.log("게시글 수정 로직이들어갑니다");
    case "DELETE":
      return console.log("게시글 삭제 로직이들어갑니다");
  }
}

const Board = () => {
  const [board, dispatch] = useReducer(리듀서함수, []);

  const onCreate = () => {
    dispatch({
      type: "CREATE",
      payload: boardItem,
    });
  };
  const onUpdate = () => {
    dispatch({
      type: "UPDATE",
      payload: "게시글 수정",
    });
  };
  const onDelete = () => {
    dispatch({
      type: "DELETE",
      payload: "게시글 삭제",
    });
  };

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

  return (
    <div className="Create">
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
        <textarea rows="5" name="content" onChange={onChange} />
      </div>
      {/* <button onClick={onClick}> 결과보기</button> */}
      <button onClick={onCreate}> 작성하기</button>
      <button onClick={onDelete}> 삭제하기</button>
      <button onClick={onUpdate}> 수정하기</button>
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

export default Board;
