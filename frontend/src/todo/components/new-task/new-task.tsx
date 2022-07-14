import React, { useState, Dispatch, SetStateAction } from "react"

type DataT = { id: number; title: string; completed: boolean; deleteText: () => void }[]

interface PropsT {
  userData: DataT
  setData: Dispatch<SetStateAction<DataT>>
}

export const NewTask = ({ userData, setData }: PropsT) => {
  const [inputValue, setInputValue] = useState("")

  const resetInputValue = (e: any) => {
    if (e.key === "Enter") {
      setData((prev) =>
        prev.concat({ id: prev.length + 1, title: inputValue, completed: false, deleteText: () => console.log("hi") })
      )
      setInputValue("")
    }
  }

  return (
    <div>
      <span>&#8595;</span>
      <input
        type={"text"}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => resetInputValue(e)}
      />
    </div>
  )
}
