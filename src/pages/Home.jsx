import "./Home.css"
import Button from "../components/Button"
import BoardList from "../components/BoardList"

const Home = ({ data }) => {
    return (
        <div className="home">
            <div className="home_title">게시판 제목</div>

            <div className="action_tab">
                <div className="sort">
                    <select>
                        <option value="">최신순</option>
                        <option value="">오래된순</option>
                    </select>

                </div>
                <div className="create">
                    <Button type={"PRIMARY"} text={"작성하기"} />
                </div>
            </div>

            <div className="list">
                <BoardList data={data} />

            </div>
            {/* <div>페이징</div> */}

            <div className="search">
                <input className="input" type="text" placeholder="검색어를 입력해주세요." />
                <div className="button">
                    <Button type={"SEARCH"} text={"검색"} />
                </div>
            </div>

        </div>
    )
}

export default Home