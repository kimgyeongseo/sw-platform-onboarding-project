export interface TaskProps{
    id: string;
    title: string;
    isChecked: boolean;
}

export interface TaskItemProps{
    task: TaskProps;
    handleTaskComplete: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleTaskDelete: (id: string) => void;
}

export interface TaskListProps{
    tasks: TaskProps[];
    handleTaskComplete: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleTaskDelete: (id: string) => void;
}

export interface NewTaskProps{
    tasks: TaskProps[];
    handleTaskCreate: (task: TaskProps) => void;
}