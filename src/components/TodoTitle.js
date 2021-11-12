import React from "react";
import "./TodoTitle.scss";
import case0 from "../case0.png";
import case3 from "../case3.png";
import case2 from "../case2.png";
import case1 from "../case1.png";
import juice from "../juice.png";

const show = (numberOfChecked) => {
  switch (numberOfChecked) {
    case 0:
      return (
        <div className="images">
          <img src={case0} height="300px" alt="orange" />{" "}
        </div>
      );
    case 1:
      return (
        <div className="images">
          <img src={case1} height="300px" alt="orange" />{" "}
        </div>
      );
    case 2:
      return (
        <div className="images">
          <img src={case2} height="300px" alt="orange" />{" "}
        </div>
      );

    case 3:
      return (
        <div className="images">
          <img src={case3} height="300px" alt="orange" />{" "}
        </div>
      );
    case 4:
      return (
        <div className="images">
          <img src={juice} height="300px" alt="orange" />{" "}
        </div>
      );
    default:
      return (
        <div className="images">
          <img src={case0} height="300px" alt="orange" />{" "}
        </div>
      );
  }
};

const TodoTitle = ({ numberOfChecked }) => {
  return show(numberOfChecked);
};

export default TodoTitle;
