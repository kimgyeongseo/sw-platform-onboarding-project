import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"

import { TaskList } from "./task-list"

describe("TaskList Component", () => {
  it("rendering test", () => {
    const data = [
      { id: 1, title: "hellllo", completed: false, deleteText: () => console.log("helllo") },
      { id: 2, title: "점심 식사 구하기", completed: true, deleteText: () => console.log("hihihi") },
      { id: 3, title: "공부 계획 세우기", completed: false, deleteText: () => console.log("third text") },
    ]
    render(<TaskList userData={data} />)
    const firstText = screen.getByText("hellllo")
    const secondText = screen.getByText("점심 식사 구하기")
    const thirdText = screen.getByText("공부 계획 세우기")

    expect(firstText).toBeInTheDocument()
    expect(secondText).toBeInTheDocument()
    expect(thirdText).toBeInTheDocument()
  })
})
