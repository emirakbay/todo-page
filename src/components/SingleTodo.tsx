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

export const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form action="" className="todos__single">
      <span className="todos__single--text">{todo.todo}</span>
      <div>
        <span
          id="edit-icon"
          className="icon"
          onClick={onSpanClick}
          data-custom-attribute="foo"
        >
          <AiFillEdit></AiFillEdit>
        </span>
        <span
          id="delete-icon"
          className="icon"
          onClick={onSpanClick}
          data-custom-attribute="foo1"
        >
          <AiFillDelete></AiFillDelete>
        </span>
        <span
          id="done-icon"
          className="icon"
          onClick={onSpanClick}
          data-custom-attribute="foo2"
        >
          <MdDone></MdDone>
        </span>
      </div>
    </form>
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