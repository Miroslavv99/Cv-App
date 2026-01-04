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
        <label htmlFor="experienceStartDate">Start Date</label>
        <input
          className="date-input"
          type="date"
          name="experienceStartDate"
          id="experienceStartDate"
        />
        <label htmlFor="experienceEndDate">End Date</label>
        <input
          className="date-input"
          type="date"
          name="experienceEndDate"
          id="experienceEndDate"
        />
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description"></textarea>
        <button className="save">Save</button>
      </form>
    </>
  );
}
