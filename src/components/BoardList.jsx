import BoardItem from "./BoardItem";
import "./BoardList.css";

const BoardList = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <BoardItem key={item.id} {...item} />
      ))}
    </div>
  );
};
export default BoardList;
