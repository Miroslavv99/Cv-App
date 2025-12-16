import { useState } from "react";
import { Icon } from "./icons/ Icon";

export function DropDownMenu({ children, title, image }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="dropdown">
        <div onClick={toggleOpen} className="menu-header">
          <div className="menu-title">
            <Icon name={image} />
            <h1>{title}</h1>
          </div>
          <button
            className={`drop-button ${isOpen ? "button-open" : ""}`}
            onClick={toggleOpen}
          >
            {<Icon name={"chevron"} />}
          </button>
        </div>
        <div className={`menu-content ${isOpen ? "open" : ""}`}>
          {children}
          <button className="save" onClick={toggleOpen}>
            ✔ Save
          </button>
        </div>
        <button
          className={`edit ${isOpen ? "" : "visible"}`}
          onClick={toggleOpen}
        >
          Edit
        </button>
      </div>
    </>
  );
}
