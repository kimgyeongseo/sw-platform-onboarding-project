import React, { useState, Dispatch, SetStateAction } from "react"

import styles from "./new-task.module.css"

type DataT = { id: number; title: string; completed: boolean; deleteText: () => void }[]

interface PropsT {
  userData: DataT
  setData: Dispatch<SetStateAction<DataT>>
  setAllChecked: Dispatch<SetStateAction<void>>
}

export const NewTask = ({ userData, setData, setAllChecked }: PropsT) => {
  const [inputValue, setInputValue] = useState("")

  const resetInputValue = (e: any) => {
    if (e.key === "Enter") {
      setData((prev) =>
        prev.concat({ id: prev.length + 1, title: inputValue, completed: false, deleteText: () => console.log("hi") })
      )
      setInputValue("")
    }
  }

  const onClickFn = () => {
    if (userData.length) {
      setAllChecked()
    }
  }

  return (
    <div>
      <button type="button" className={styles.btn} onClick={onClickFn}>
        &#8595;
      </button>
      <input
        type={"text"}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => resetInputValue(e)}
      />
    </div>
  )
}
