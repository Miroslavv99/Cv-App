import { useState } from "react";

export function DropDownMenu({ children, title }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="dropdown">
        <h1>{title}</h1>
        <button onClick={toggleOpen}>DROP</button>
        <div className={`menu-content ${isOpen ? "open" : ""}`}>{children}</div>
      </div>
    </>
  );
}
