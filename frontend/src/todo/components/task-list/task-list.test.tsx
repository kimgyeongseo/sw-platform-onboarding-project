import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"

import { TaskList } from "./task-list"

describe("TaskList Component", () => {
  it("rendering test", () => {
    render(<TaskList />)
  })
})
