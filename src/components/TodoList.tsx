import React from "react";
import AddTodo from "./AddTodo";
import ToDo from "./ToDo";

interface Todo {
  id: number;
  name: string;
}

const TodoList: React.FC = () => {
  const [addButton, setAddButton] = React.useState<Boolean>(false);

  const [todos, setTodo] = React.useState<Todo[]>([
    {
      id: 1,
      name: "first todo",
    },
    {
      id: 2,
      name: "second todo",
    },
  ]);

  const handleDelete = (id: number) => {
    const filteredArr = todos.filter((todo) => todo.id != id);
    setTodo(filteredArr);
  };

  const handleAdd = (todoName: string | undefined) => {
    if (!todoName) return;

    const todo: Todo = {
      id: todos.length,
      name: todoName,
    };
    setTodo([...todos, todo]);
  };

  return (
    <div>
      {todos.map((todo) => (
        <ToDo todo={todo} handleDelete={handleDelete} />
      ))}

      <button
        onClick={() => {
          setAddButton(!addButton);
        }}
        style={{ margin: "100px" }}
      >
        {!addButton ? " AddMore" : "Done"}
      </button>
      {addButton && (
        <AddTodo handleAdd={handleAdd} setAddButton={setAddButton} />
      )}
    </div>
  );
};

export default TodoList;
