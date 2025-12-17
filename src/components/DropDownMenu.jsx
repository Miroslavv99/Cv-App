import { Icon } from "./icons/ Icon";

export function DropDownMenu({ children, title, image, isOpen, setIsOpen }) {
  return (
    <>
      <div className="dropdown">
        <div className="menu-header">
          <div className="menu-title">
            <Icon name={image} />
            <h1>{title}</h1>
          </div>
          <button
            className={`drop-button ${isOpen ? "button-open" : ""}`}
            onClick={() => {
              setIsOpen("general");
            }}
          >
            {<Icon name={"chevron"} />}
          </button>
        </div>
        <div className={`menu-content ${isOpen ? "open" : ""}`}>{children}</div>
        <button className={`edit ${isOpen ? "" : "visible"}`}>Edit</button>
      </div>
    </>
  );
}
