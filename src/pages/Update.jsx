import { useEffect, useState } from "react";
import Button from "../components/Button";
import "./Update.css";

import { useLocation } from "react-router-dom";
const Update = () => {
  const dataInfo = useLocation();
  const { boardInfo } = dataInfo.state;
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    date: "",
  });

  useEffect(() => {
    setFormData({ ...boardInfo });
  }, [boardInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="Create">
      <div className="title">
        <div>제목</div>
        <input name="title" value={formData.title} onChange={handleChange} />
      </div>
      <div className="date">
        <div>날짜</div>
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
      </div>
      <div className="content">
        <div>내용</div>
        <textarea rows="15" value={formData.content} onChange={handleChange} />
      </div>
      <div className="button">
        <Button type="PRIMARY" text="수정하기" />
      </div>
    </div>
  );
};

export default Update;
