import { useState } from "react";
import "./index.css";

const ToggleButtonComponent = (props) => {
  const { styleProp, label } = props;

  const [on, setOnState] = useState(false);
  const toggle = () => setOnState((o) => !o);

  return (
    <div className="toggle-button-container">
      <span className="label">{label}</span>
      <button className={on ? "on " + styleProp : "off"} on={on.toString()} onClick={toggle}>
        <span className="pin">
          <span className="fill" />
        </span>
      </button>
    </div>
  );
};

export default ToggleButtonComponent;
