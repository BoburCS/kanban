import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@app/store";
import { closeModal } from "@features/modalSlice";
import Input from "@elements/input";
import Button from "@ui/button";
import Heading from "@ui/heading";
import Text from "@ui/text";

import Delete from "@icons/delete.svg";

const Modal: React.FC = () => {
  const dispatch = useDispatch();

  const handleOverlayClick = () => {
    dispatch(closeModal());
  };

  const handleModalClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const props = useSelector((state: RootState) => state.modal);

  const [subInputs, setSubInputs] = React.useState<{ placeholder: string }[]>(
    props?.subProps?.subInputs || [],
  );

  const handleAddSubInput = () => {
    setSubInputs([...subInputs, { placeholder: "" }]);
  };

  const handleDeleteSubInput = (index: number) => {
    setSubInputs(subInputs.filter((_, i) => i !== index));
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div
        className="modal flex flex-col gap-6 bg-white dark:bg-darkGrey"
        onClick={handleModalClick}
      >
        <Heading variant="l">{props.title}</Heading>

        {/* Inputs */}
        {props.inputs.length > 0 ? (
          <>
            {props.inputs?.map(
              (input: { title: string; name: string; placeholder: string }) => (
                <Input
                  key={input.title}
                  name={input.name}
                  placeholder={input.placeholder}
                  type={"text"}
                  disabled={true}
                />
              ),
            )}
          </>
        ) : null}

        {/* Sub Inputs */}
        {props.subProps.subInputs.length > 0 ? (
          <div className="flex flex-col gap-2">
            <Text
              variant="medium"
              className="font-bold text-mediumGrey dark:text-mediumGrey"
            >
              {props.subProps.title}
            </Text>

            <div className="flex flex-col gap-3">
              {props.subProps.subInputs.map(
                (subInput: { placeholder: string }, index: number) => (
                  <div
                    className="flex items-center gap-4"
                    key={subInput.placeholder}
                  >
                    <Input
                      name={props.subProps.name}
                      placeholder={subInput.placeholder}
                      type={"text"}
                    />
                    <img
                      src={Delete}
                      alt="Delete Icon"
                      className="cursor-pointer"
                      onClick={() => handleDeleteSubInput(index)}
                    />
                  </div>
                ),
              )}
            </div>

            <Button
              onClick={handleAddSubInput}
              variant="secondary"
              className="px-4 py-2"
            >
              <Text variant="medium" className="text-primary dark:text-primary">
                {props.subProps.btnTitle}
              </Text>
            </Button>
          </div>
        ) : null}

        {/* Select */}
        {props.selectProps?.options.length > 0 ? (
          <div className="flex flex-col gap-2">
            <Text
              variant="medium"
              className="font-bold text-mediumGrey dark:text-mediumGrey"
            >
              {props.selectProps.title}
            </Text>

            <select
              name={props.selectProps.title}
              className="w-full rounded border-[1px] border-solid border-lines px-4 py-2 font-medium text-black dark:text-white"
            >
              {props.selectProps.options.map(
                (option: string, index: number) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ),
              )}
            </select>
          </div>
        ) : null}

        {/* Button */}
        <Button variant="primary" className="px-4 py-2">
          <Text variant="medium" className="text-white dark:text-white">
            {props.btnTitle}
          </Text>
        </Button>
      </div>
    </div>
  );
};

export default Modal;
