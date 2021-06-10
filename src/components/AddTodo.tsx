import React from "react";

interface Props {
  handleAdd: (todoName: string | undefined) => void;
  setAddButton: React.Dispatch<React.SetStateAction<Boolean>>;
}

const AddTodo: React.FC<Props> = ({ handleAdd, setAddButton }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <div>
      <h1>Add Todo</h1>
      <input ref={inputRef} type="text" />
      <button
        onClick={() => {
          handleAdd(inputRef.current?.value.trim());
          setAddButton(false);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
