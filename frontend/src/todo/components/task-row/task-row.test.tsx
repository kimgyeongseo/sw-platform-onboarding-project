import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"

import { TaksRow } from "./index"
import { check } from "prettier"

const renderComponent = () =>
  render(<TaksRow id={1} title="점심 메뉴 정하기" completed={false} deleteText={() => console.log("delete")} />)

describe("TaskRow Component", () => {
  it("rendering Task", () => {
    renderComponent()
  })

  it("check props Value", () => {
    renderComponent()
    const titleProps = screen.getByText("점심 메뉴 정하기")
    expect(titleProps).toBeInTheDocument()
  })

  it("is CheckBox checked?", () => {
    renderComponent()
    const checkBox = screen.getByRole("checkbox")
    fireEvent.change(checkBox, { target: { checked: false } })
    expect(checkBox).not.toBeChecked()
  })

  it("delete button is working", () => {
    const deleteClick = jest.fn()
    render(<TaksRow id={1} title="점심 메뉴 정하기" completed={false} deleteText={deleteClick} />)
    const deleteButton = screen.getByTestId("xBtn")
    fireEvent.click(deleteButton)
    expect(deleteClick).toHaveBeenCalled()
  })

  describe("double click span title scenario", () => {
    it("change to input tag and check input value", () => {
      // 더블 클릭시 state값이 변경되면서 조건부 랜더링으로 span의 title이 input테그로 변경되어야함

      renderComponent()

      const titleSpan = screen.getByText("점심 메뉴 정하기")
      fireEvent.doubleClick(titleSpan)
      const inputText = screen.getByRole("textbox")

      expect(inputText).toBeInTheDocument()
      expect(titleSpan).not.toBeInTheDocument()
      expect(inputText).toHaveValue("점심 메뉴 정하기")
    })

    it("check input onChange event and enter keyPress event", () => {
      renderComponent()

      const titleSpan = screen.getByText("점심 메뉴 정하기")
      fireEvent.doubleClick(titleSpan)
      const inputText = screen.getByRole("textbox")

      fireEvent.change(inputText, { target: { value: "mytest" } })
      expect(inputText).toHaveValue("mytest")

      fireEvent.keyDown(inputText, { key: "Enter", code: "Enter", charCode: 13 })
      const changedTitleSpan = screen.getByText("mytest")

      expect(inputText).not.toBeInTheDocument()
      expect(changedTitleSpan).toBeInTheDocument()
    })

    it("if title is empty string -> delete", () => {
      const deleteClick = jest.fn()
      render(<TaksRow id={1} title="점심 메뉴 정하기" completed={false} deleteText={deleteClick} />)

      const titleSpan = screen.getByText("점심 메뉴 정하기")
      fireEvent.doubleClick(titleSpan)
      const inputText = screen.getByRole("textbox")

      fireEvent.change(inputText, { target: { value: "" } })
      expect(inputText).toHaveValue("")

      fireEvent.keyDown(inputText, { key: "Enter", code: "Enter", charCode: 13 })
      expect(deleteClick).toHaveBeenCalled()
    })
  })
})
