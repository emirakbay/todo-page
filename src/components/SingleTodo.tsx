import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";
import { Draggable } from "@hello-pangea/dnd";

type Props = {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

export const SingleTodo = ({ index, todo, todos, setTodos }: Props) => {

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  // edit, delete, isDone functions should be declared in the TodoList component and passed to the todo components as props
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(todos.map((todo) => (
      todo.id === id ? { ...todo, todo: editTodo } : todo
    )));

    setEdit(false);
  };

  const handleDone = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit])

  return (
    <Draggable draggableId={todo.id.toString()} index={index} >
      {(provided) => (
        <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          {
            edit ? (
              <input value={editTodo} type="text" onChange={(e) => setEditTodo(e.target.value)} className="todos__single--text" />
            ) :
              todo.isDone ? (
                <s className="todos__single--text">{todo.todo}</s>
              ) : (
                <span className="todos__single--text">{todo.todo}</span>
              )
          }
          <div>
            <span
              id="edit-icon"
              className="icon"
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}
            // onClick={onSpanClick}
            // data-custom-attribute="foo"
            >
              <AiFillEdit></AiFillEdit>
            </span>
            <span
              id="delete-icon"
              className="icon"
              onClick={() => handleDelete(todo.id)}
            // onClick={onSpanClick}
            // data-custom-attribute="foo1"
            >
              <AiFillDelete></AiFillDelete>
            </span>
            <span
              id="done-icon"
              className="icon"
              onClick={() => handleDone(todo.id)}
            // onClick={onSpanClick}
            // data-custom-attribute="foo2"
            >
              <MdDone></MdDone>
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

function onSpanClick(event: any): any {
  // console.log(event.currentTarget.id);
  console.log(
    document
      .querySelector("#" + event.currentTarget.id)
      ?.getAttribute("data-custom-attribute")
  );
}