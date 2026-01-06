export function ProfessionalSection({
  jobTitle,
  company,
  experienceStartDate,
  experienceEndDate,
  description,
}) {
  return (
    <>
      <h3>Professional Expercience</h3>
      <div className="professional-section">
        <div className="job-info">
          <div>
            <h4>{jobTitle},</h4>
            <i>&nbsp;{company}</i>
          </div>
          <p className="description"> {description}</p>
        </div>
        <div className="date-info">
          <i>Start Date: {experienceStartDate}</i>
          <i>End Date: {experienceEndDate}</i>
        </div>
      </div>
    </>
  );
}
