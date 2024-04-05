import { useParams } from "react-router-dom"

const Info = () => {
    const param = useParams()

    return (
        <div>{param.id}번 글 상세페이지화면 </div>
    )
}

export default Info