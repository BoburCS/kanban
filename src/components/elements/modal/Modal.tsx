import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@app/store";
import { ModalState, closeModal } from "@features/modalSlice";

import AddTaskForm from "@elements/form/AddTaskForm";
import AddBoardForm from "@elements/form/AddBoardForm";
import DeleteBoard from "@elements/board/DeleteBoard";
import TaskDetailsForm from "@elements/task/TaskDetailsForm";
import DeleteTaskForm from "@elements/task/DeleteTaskForm";

const modalForms = {
    AddTaskForm: AddTaskForm,
    AddBoardForm: AddBoardForm,
    DeleteBoard: DeleteBoard,
    DeleteTask: DeleteTaskForm,
    ShowTask: TaskDetailsForm,
};

export default function Modal() {
    const dispatch = useDispatch();

    const handleOverlayClick = () => {
        dispatch(closeModal());
    };

    const handleModalClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    const { modalType, task, taskId } = useSelector(
        (state: RootState) => state.modal,
    ) as ModalState;
    const ModalForm = modalForms[modalType];

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div
                className="modal flex flex-col gap-6 bg-white dark:bg-darkGrey"
                onClick={handleModalClick}
            >
                {modalType === "ShowTask" ? (
                    <ModalForm task={task} />
                ) : (
                    <>
                        {modalType === "DeleteTask" ? (<ModalForm id={taskId.id} title={taskId.title} />) : <ModalForm />}
                    </>
                )}
            </div>
        </div>
    );
}
