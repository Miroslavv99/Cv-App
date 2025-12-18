export function EducationForm({ submit }) {
  return (
    <>
      <form onSubmit={(e) => submit(e, "education")}>
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          name="degree"
          id="degree"
          placeholder="Enter Degree / Field of Study"
        />
        <label htmlFor="school">School</label>
        <input
          type="text"
          name="school"
          id="school"
          placeholder="Enter School / University"
        />
        <label htmlFor="country">Country, City</label>
        <input
          type="text"
          name="country"
          id="country"
          placeholder="Enter Country and City"
        />
        <label htmlFor="start-date">Start Date</label>
        <input
          className="date-input"
          type="date"
          name="start-date"
          id="start-date"
        />
        <label htmlFor="end-date">End Date</label>
        <input
          className="date-Input"
          type="date"
          name="end-date"
          id="end-date"
        />
        <button className="save">Save</button>
      </form>
    </>
  );
}
