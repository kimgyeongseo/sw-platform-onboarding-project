import { TaskProps } from "@/todo/types/todo-schema";
import {cleanup, fireEvent, render, screen} from "@testing-library/react"

import Todo from "./task-row"

afterEach(cleanup);

describe('<Todo />', () => {
    const changeTest = jest.fn();
    const deleteTest = jest.fn();
    let sample: TaskProps = {
        id: "1",
        title: "task 1",
        isChecked: false
    };
    it("render task", ()=>{
        render(<Todo task={sample} handleTaskComplete={changeTest} handleTaskDelete={deleteTest}/>);
        const taskCheckbox = screen.getByLabelText(sample.title) as HTMLInputElement;
        const title = screen.getByText(sample.title).textContent;
        const deleteButton = screen.getByText("X");
        expect(taskCheckbox).toBeInTheDocument();
        expect(title).toEqual("task 1");
        expect(deleteButton).toBeInTheDocument();
    });
    
    it("handleTaskComplete is called when clicked", ()=>{
        render(<Todo task={sample} handleTaskComplete={changeTest} handleTaskDelete={deleteTest}/>);
        const taskCheckbox = screen.getByLabelText(sample.title) as HTMLInputElement;
        fireEvent.click(taskCheckbox);
        expect(changeTest).toBeCalledTimes(1);
    });
    
    it("task is completed when true", ()=>{
        sample.isChecked=true;
        render(<Todo task={sample} handleTaskComplete={changeTest} handleTaskDelete={deleteTest}/>);
        const taskCheckbox = screen.getByLabelText(sample.title) as HTMLInputElement;
        const title = screen.getByText(sample.title);
        expect(taskCheckbox.checked).toEqual(true);
        expect(title).toHaveStyle('text-decoration: line-through');
    });
    
    it("task is not completed when false", ()=>{
        sample.isChecked=false;
        render(<Todo task={sample} handleTaskComplete={changeTest} handleTaskDelete={deleteTest}/>);
        const taskCheckbox = screen.getByLabelText(sample.title) as HTMLInputElement;
        const title = screen.getByText(sample.title);
        expect(taskCheckbox.checked).toEqual(false);
        expect(title).not.toHaveStyle('text-decoration: line-through');
    });
    
    it("handleTaskDelete is called when button clicked", ()=>{
        render(<Todo task={sample} handleTaskComplete={changeTest} handleTaskDelete={deleteTest}/>);
        const deleteButton = screen.getByText("X");
        fireEvent.click(deleteButton);
        expect(deleteTest).toBeCalledWith(sample.id);
    });
});

