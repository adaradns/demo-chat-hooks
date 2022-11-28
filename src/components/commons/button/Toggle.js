import React from "react";
import './Toggle.css';

function Toggle(props) {
  const {
    text,
    checked,
    onChange,
    online,
    offstyle = "btn-danger",
    onstyle = "btn-success"
  } = props;

  let displayStyle = checked && online ? onstyle : offstyle;
  return (
    <>
      <label>
        <span className="switch-wrapper">
          <input
            type="checkbox"
            checked={checked && online}
            onChange={e => onChange(e)}
          />
          <span className={`${displayStyle} switch`}>
            <span className="switch-handle" />
          </span>
        </span>
        <span className="switch-label">{text}</span>
      </label>
    </>
  );
}

export default Toggle;
