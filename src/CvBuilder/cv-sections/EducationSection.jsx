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
        <div className="school-info">
          <h4>{degree},</h4>
          <i>&nbsp;{school}</i>
        </div>
        <div className="education-info">
          <p>{country}</p>
          <i>Start Date: {startDate}</i>
          <i>End Date: {endDate}</i>
        </div>
      </div>
    </>
  );
}
