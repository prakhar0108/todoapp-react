import React from "react";
import "./todo.scss";
interface OutputObj {
  taskName: string;
  category: string;
  dueDate: string;
  _id: string;
  __v: number;
}
interface todoProps {
  todos: OutputObj[];
}
export function Todo({ todos }: todoProps) {
  console.log("props==", todos);
  const abc = todos;
  console.log("abc", abc);

  return (
    <div>
      {abc.map((obj: OutputObj) => (
        <div className="todo">
          <div>
            <span>{obj.taskName}</span>
            <span>{obj.dueDate}</span>
          </div>
          <div>
            <span>{obj.category}</span>
          </div>
        </div>
      ))}
    </div>
    // <h1>aa</h1>
  );
}
