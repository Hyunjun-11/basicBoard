const funArrayExam = (oneA, oneB) => {
  let number = "";
  number += oneA[0];
  number += oneA[1];
  number += oneA[2];

  let string = [];
  string[0] = oneA[0] + oneB[0];
  string[1] = oneA[1] + oneB[1];
  string[2] = oneA[2] + oneB[2];

  alert(number + "  " + string);
};

const FunctionExam = () => {
  return (
    <div>
      <div>숫자 3개를 받아서 앞에 2개는 더하고 마지막 숫자를 곱해서 결과를</div>
      <div> </div>
    </div>
  );
};

export default FunctionExam;
