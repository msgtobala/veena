import React from "react";

import "./Input.css";

const Input = props => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className=""
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          onFocus={props.focused}
          onBlur={props.notFocused}
          autoComplete="off"
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className=""
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          onFocus={props.focused}
          onBlur={props.notFocused}
          autoComplete="off"
        />
      );
      break;
    case "select":
      let options = props.elementConfig.options;
      inputElement = (
        <select className="" value={props.value} onChange={props.changed}>
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className=""
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          onFocus={props.focused}
          onBlur={props.notFocused}
          autoComplete="off"
        />
      );
      break;
  }

  let spanClasses = ["content-name", "spanNotFocused"];
  let labelClassAfter = ["label-name","spanAfterNotFocused"];
  if (props.focus) {
    spanClasses = ["content-name", "spanFocused"];
    labelClassAfter = ["label-name","spanAfterFocused"];
  }

  return (
    <div className="modal-form">
      {inputElement}
      <label htmlFor={props.elementConfig.name} className={labelClassAfter.join(' ')}>
        <span className={spanClasses.join(" ")}>
          {props.elementConfig["data-name"]}
        </span>
      </label>
    </div>
  );
};

export default Input;
