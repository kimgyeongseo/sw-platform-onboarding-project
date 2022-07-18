import React, {useState} from 'react'

import { TaskItemProps } from '@/todo/types/todo-schema';

const Todo = (props: TaskItemProps) => {
    return (
    <div>
        <input 
            type="checkbox"
            id={props.task.title}
            checked={props.task.isChecked}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleTaskComplete(event, props.task.id)}
        />
        <label htmlFor={props.task.title}>
            <span style={{textDecoration: props.task.isChecked ? 'line-through' : 'none'}}>
                {props.task.title}
            </span>
        </label>
        <button onClick={() => props.handleTaskDelete(props.task.id)}>X</button>
    </div>
    );
};

export default Todo;