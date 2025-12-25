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
        <label htmlFor="startDate">Start Date</label>
        <input
          className="date-input"
          type="date"
          name="startDate"
          id="startDate"
        />
        <label htmlFor="endDate">End Date</label>
        <input className="date-input" type="date" name="endDate" id="endDate" />
        <button className="save">Save</button>
      </form>
    </>
  );
}
