import React from "react";
import { Todo } from "../model";
import { SingleTodo } from "./SingleTodo";
import { Droppable } from "@hello-pangea/dnd";
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos, completedTodos, setCompletedTodos }: Props) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided) => (
          <div className="todos" ref={provided.innerRef} {...provided.droppableProps}>
            <span className="todos__heading">
              Active Tasks
            </span>
            {
              todos.map((todo, index) => (
                <SingleTodo index={index} todo={todo} todos={todos} setTodos={setTodos} key={todo.id}></SingleTodo>
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided) => (
          <div className="todos remove" ref={provided.innerRef} {...provided.droppableProps}>
            <span className="todos__heading">
              Completed Tasks
            </span>
            {
              completedTodos.map((todo, index) => (
                <SingleTodo index={index} todo={todo} todos={completedTodos} setTodos={setCompletedTodos} key={todo.id}></SingleTodo>
              ))
            }
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
    // <div className="todos">
    //   <span className="todos__span--text">TODOS</span>
    //   {todos.map((todo) => (
    //     <div key={todo.id}>
    //       <SingleTodo
    //         todo={todo}
    //         key={todo.id}
    //         todos={todos}
    //         setTodos={setTodos}
    //       ></SingleTodo>
    //     </div>
    //   ))}
    // </div>
  );
};

export default TodoList;