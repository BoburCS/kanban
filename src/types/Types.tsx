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

export type BoardTypes = {
    __v: number;
    _id: string;
    title: string;
}

export interface BoardStateTypes {
    activeBoard: BoardTypes | null;
    activeBoardId: string;
}
