import React from "react";

//Font Awesome
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FormContainer } from "./styles";

const Form = ({
  inputText,
  changeInputText,
  todos,
  adcTodos,
  selectStatus,
}) => {
  const inputTextHandler = (e) => {
    changeInputText(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    adcTodos([
      ...todos,
      {
        id: Math.random() * 10001,
        text: inputText,
        completed: false,
      },
    ]);
    changeInputText("");
  };

  const statusHandler = (e) => {
    selectStatus(e.target.value);
  };

  const clearLocalStorage = (_) => {
    localStorage.clear();
  };

  return (
    <FormContainer>
      <input
        className="todo-input"
        type="text"
        value={inputText}
        placeholder="Adc uma tarefa!"
        onChange={inputTextHandler}
      />
      <button className="todo-button" type="submit" onClick={submitFormHandler}>
        <FontAwesomeIcon icon={faPlusSquare} />
      </button>

      <button className="todo-clear" onClick={clearLocalStorage}>
        Limpar Dados
      </button>

      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">Todos</option>
          <option value="completed">Completas</option>
          <option value="uncompleted">Incompletas</option>
        </select>
      </div>
    </FormContainer>
  );
};
export default Form;
