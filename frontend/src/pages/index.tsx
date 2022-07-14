import { useState } from "react"

import { TaskList } from "@/todo/components/task-list/task-list"
import { NewTask } from "@/todo/components/new-task/new-task"

const Home = () => {
  const [data, setData] = useState([
    { id: 1, title: "hello", completed: false, deleteText: () => console.log("deleteText") },
    { id: 2, title: "저녁 메뉴 정하기", completed: true, deleteText: () => console.log("this is delete function") },
    { id: 3, title: "운동 계획 세우기", completed: false, deleteText: () => console.log("hiiii") },
  ])
  return (
    <div>
      <NewTask userData={data} setData={setData} />
      <TaskList userData={data} />
    </div>
  )
}

export default Home
