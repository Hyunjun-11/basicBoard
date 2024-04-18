import "./Info.css";

import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Info = ({ data }) => {
  const navi = useNavigate();

  return (
    <div className="Create">
      <div className="title">
        <div>제목</div>
        <input name="title" value={data.title} readOnly />
      </div>
      <div className="date">
        <div>날짜</div>
        <input type="date" name="date" value={data.date} readOnly />
      </div>
      <div className="content">
        <div>내용</div>
        <textarea rows="15" readOnly value={data.content} />
      </div>
      <div className="button">
        <Button type="DELETE" text="삭제하기" />
        <Button
          type="PRIMARY"
          text="수정하기"
          onClick={() => {
            navi(`/update/${data.id}`, { state: { data } });
          }}
        />
      </div>
    </div>
  );
};

export default Info;
