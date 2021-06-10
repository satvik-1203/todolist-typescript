import React from "react";

interface Props {
  todo: {
    id: number;
    name: string;
  };
  handleDelete: (id: number) => void;
}

const ToDo: React.FC<Props> = ({ todo, handleDelete }) => {
  const { id, name } = todo;
  return (
    <div style={{ marginLeft: "80px" }}>
      <h1>{name}</h1>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ToDo;
