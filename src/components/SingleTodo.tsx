import React from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

// function onEditClick(e: React.MouseEvent<HTMLSpanElement, MouseEvent>): void {
//   console.log(e);
// }

function onDeleteClick(e: React.MouseEvent<HTMLSpanElement, MouseEvent>): void {
  console.log(e);
}

function onDoneClick(e: React.MouseEvent<HTMLSpanElement, MouseEvent>): void {
  console.log(e);
}

function onEditClick(e: any): void {
  console.log(document.querySelector("#edit-icon")?.getAttribute("data-custom-attribute"));
}

export const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form action="" className="todos__single">
      <span className="todos__single--text">{todo.todo}</span>
      <div>
        <span
          id="edit-icon"
          className="icon"
          data-custom-attribute="foo"
          onClick={(e) => onEditClick(e)}
        >
          <AiFillEdit></AiFillEdit>
        </span>
        <span className="icon" onClick={(e) => onDeleteClick(e)}>
          <AiFillDelete></AiFillDelete>
        </span>
        <span className="icon" onClick={(e) => onDoneClick(e)}>
          <MdDone></MdDone>
        </span>
      </div>
    </form>
  );
};
