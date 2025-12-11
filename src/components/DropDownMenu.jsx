export function DropDownMenu({ children }) {
  return (
    <>
      <div className="dropdown">
        <button>DROP</button>
        <div className="menu-content">{children}</div>
      </div>
    </>
  );
}
