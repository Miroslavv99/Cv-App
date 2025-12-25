export function GeneralSection({ name, email, phone, city }) {
  return (
    <>
      <div className="general-section">
        <div className="general-header">
          <h2>{name}</h2>
        </div>
        <div className="general-footer">
          <p>{email}</p>
          <p>{phone}</p>
          <p>{city}</p>
        </div>
      </div>
    </>
  );
}
