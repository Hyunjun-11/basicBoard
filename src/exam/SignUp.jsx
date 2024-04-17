import "./SignUp.css";

const SignUp = () => {
  const 눌렀을때 = () => {
    console.log("누를때마다실행");
  };

  return (
    <div className="SignUp">
      <div>회원정보를 받아 App컴포넌트의 user객체에 저장하기</div>
      <div className="Id">
        <div>아이디</div>
        <input type="text" />
      </div>
      <div className="Pw">
        <div>비밀번호</div>
        <input type="password" />
      </div>
      <button>App컴포넌트로 전송하기</button>

      <button onClick={눌렀을때}> 수정하기</button>
      <button onClick={눌렀을때()}> 수정하기</button>
    </div>
  );
};

export default SignUp;
