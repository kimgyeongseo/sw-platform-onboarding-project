import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"

import { NewTask } from "./new-task"

describe("newTask component test", () => {
  describe("유저가 새로운 task를 작성", () => {
    it("엔터키를 눌렀을때 setData함수가 실행되는지 확인, input값 초기화", () => {
      const mockSetState = jest.fn()
      const mockAllCheckFn = jest.fn()
      const data = [
        { id: 1, title: "hello", completed: false, deleteText: () => console.log("deleteText") },
        { id: 2, title: "저녁 메뉴 정하기", completed: true, deleteText: () => console.log("this is delete function") },
        { id: 3, title: "운동 계획 세우기", completed: false, deleteText: () => console.log(3) },
      ]

      render(<NewTask setData={mockSetState} userData={data} setAllChecked={mockAllCheckFn} />)

      const textInput = screen.getByRole("textbox")
      userEvent.type(textInput, "새로운 데이터를 추가")
      userEvent.type(textInput, "{enter}")

      expect(textInput).toHaveValue("")
      expect(mockSetState).toHaveBeenCalled()
    })
  })

  describe("유저가 all check 버튼 클릭", () => {
    it("all check 실행 확인", () => {
      const mockAllCheckFn = jest.fn()
      const mockSetState = jest.fn()
      const data = [
        { id: 1, title: "hello", completed: false, deleteText: () => console.log("deleteText") },
        { id: 2, title: "저녁 메뉴 정하기", completed: true, deleteText: () => console.log("this is delete function") },
        { id: 3, title: "운동 계획 세우기", completed: false, deleteText: () => console.log(3) },
      ]
      render(<NewTask setData={mockSetState} userData={data} setAllChecked={mockAllCheckFn} />)

      const checkButton = screen.getByRole("button")
      userEvent.click(checkButton)

      expect(mockAllCheckFn).toHaveBeenCalled()
    })
  })
})
