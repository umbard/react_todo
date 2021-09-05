import React from "react";

const style = {
  backgroundColor: "#ffffe0",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const CompleteTodos = (props) => {
  const { todos, Cback, CCdelete } = props;
  return (
    <div style={style}>
      <p className="title">完了済のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => Cback(index)}>戻す</button>
              <button onClick={() => CCdelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
