import React from "react";
import "./TodoTemplate.scss";
//import orangeImage from "../orangeImage.png";
//import juiceImage from "../juiceImage.png";

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title"> Only 4 Things to do today</div>
      <div className="content">{children}</div>
    </div>
  );
};
export default TodoTemplate;
