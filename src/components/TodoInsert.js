import React, { useState, useCallback } from "react";
import "./TodoInsert.scss";

const TodoInsert = ({ todos, onInsert }) => {
  const [value, setValue] = useState("");
  const numberOfTodos = todos.length;
  console.log(numberOfTodos);
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(""); // value 값 초기화
      // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      // 이를 방지하기 위해 이 함수를 호출합니다.
      e.preventDefault();
    },
    [onInsert, value]
  );

  const onAlert = (e) => {
    alert("제일 중요한 할 일 4개만 적어요");
    e.preventDefault();
  };

  return numberOfTodos < 4 ? (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="write 4things to do "
        value={value}
        onChange={onChange}
      />
      <button type="submit">add</button>
    </form>
  ) : (
    <form className="TodoInsert" onSubmit={onAlert}>
      <input
        placeholder="write 4things to do "
        value={value}
        onChange={onChange}
      />
      <button type="submit">add</button>
    </form>
  );
};

export default TodoInsert;
