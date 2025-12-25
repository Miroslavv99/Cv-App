export function EducationSection({
  degree,
  school,
  country,
  startDate,
  endDate,
}) {
  return (
    <>
      <h3>Education</h3>
      <div className="education-section">
        <h1>{degree}</h1>
        <h1>{school}</h1>
        <h1>{country}</h1>
        <h2>{startDate}</h2>
        <h2>{endDate}</h2>
      </div>
    </>
  );
}
