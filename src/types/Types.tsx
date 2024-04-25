export interface SubtaskTypes {
    id: string;
    title: string;
    status: boolean;
}

export interface TaskTypes {
    id: string;
    title: string;
    description: string;
    subTasks: SubtaskTypes[];
    status: string;
    boardId: string;
}

export interface ColumnTypes {
    id: string;
    name: string;
    // tasks: TaskTypes[];
}

export interface BoardTypes {
    id: string;
    name: string;
    columns: ColumnTypes[] | [];
}

export interface BoardStateTypes {
    activeBoard: BoardTypes | null;
    activeBoardId: string;
}