import { Icon } from "./icons/ Icon";

export function Accordion({ children, title, image, isOpen, setIsOpen }) {
  return (
    <>
      <div className="accordion">
        <div className="accordin-header">
          <div className="accordion-title">
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
        <div className={`accordion-content ${isOpen ? "open" : ""}`}>
          {children}
        </div>
        <button
          className={`edit ${isOpen ? "" : "visible"}`}
          onClick={() => {
            setIsOpen("general");
          }}
        >
          Edit
        </button>
      </div>
    </>
  );
}
