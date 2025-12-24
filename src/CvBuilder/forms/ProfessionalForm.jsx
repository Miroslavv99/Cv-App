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
        <button className="save">Save</button>
      </form>
    </>
  );
}
