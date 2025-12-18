import { Icon } from "./icons/ Icon";

export function Accordion({
  children,
  title,
  image,
  formIsOpen,
  buttonVisible,
  setIsOpen,
  openKey,
}) {
  console.log({ buttonVisible, formIsOpen });
  return (
    <>
      <div className="accordion">
        <div className="accordin-header">
          <div className="accordion-title">
            <Icon name={image} />
            <h1>{title}</h1>
          </div>
          <button
            className={`drop-button ${formIsOpen ? "button-open" : ""}`}
            onClick={() => {
              setIsOpen(openKey);
            }}
          >
            {<Icon name={"chevron"} />}
          </button>
        </div>
        <div className={`accordion-content ${formIsOpen ? "open" : ""}`}>
          {children}
        </div>
        <button
          className={`edit ${buttonVisible && !formIsOpen ? "visible" : ""}`}
          onClick={() => {
            setIsOpen(openKey);
          }}
        >
          Edit
        </button>
      </div>
    </>
  );
}
