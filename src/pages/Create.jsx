import "./Create.css";
import React, { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Create = ({ onCreate }) => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    content: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = () => {
    onCreate(formData);
    setFormData({
      title: "",
      date: "",
      content: "",
    });
    handleNavigate("/");
  };

  return (
    <div className="Create">
      <div className="title">
        <div>제목</div>
        <input name="title" value={formData.title} onChange={onChange} type="text" />
      </div>
      <div className="date">
        <div>날짜</div>
        <input type="date" name="date" value={formData.date} onChange={onChange} />
      </div>
      <div className="content">
        <div>내용</div>
        <textarea rows="15" name="content" value={formData.content} onChange={onChange} />
      </div>
      <Button type="PRIMARY" text="작성하기" onClick={onSubmit} />
    </div>
  );
};

export default Create;
