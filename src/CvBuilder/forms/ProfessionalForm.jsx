export function ProfessionalForm({ submit }) {
  return (
    <>
      <form onSubmit={(e) => submit(e, "professional")}>
        <label htmlFor="jobTitle">Job Title</label>
        <input
          type="text"
          name="jobTitle"
          id="jobTitle"
          placeholder="Enter Job Title"
        />
        <label htmlFor="company">Company</label>
        <input
          type="text"
          name="company"
          id="company"
          placeholder="Enter Company"
        />
        <label htmlFor="start-experience-date">Start Date</label>
        <input
          className="date-input"
          type="date"
          name="start-experience-date"
          id="start-experience-date"
        />
        <label htmlFor="end-experience-date">End Date</label>
        <input
          className="date-input"
          type="date"
          name="end-experience-date"
          id="end-experience-date"
        />
        <button className="save">Save</button>
      </form>
    </>
  );
}
