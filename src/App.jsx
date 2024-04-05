import './App.css'
import BoardList from './components/BoardList'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Info from './pages/Info'
import Button from './components/Button'

const mockData = [
  {
    id: 1,
    title: "글 제목 입니다.",
    content: "1번 글 내용입니다 ",
    date: new Date().getTime()
  },
  {
    id: 2,
    title: "글 제목 입니다.",
    content: "2번 글 내용입니다 ",
    date: new Date().getTime()
  },
  {
    id: 3,
    title: "글 제목 입니다.",
    content: "3번 글 내용입니다 ",
    date: new Date().getTime()
  },
]
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home data={mockData} />} />
        <Route path="/info/:id" element={<Info />}></Route>
        <Route path="/create" element={<Create />}></Route>
      </Routes>
    </>

  )
}

export default App
