export function ProfessionalSection({
  jobTitle,
  company,
  experienceStartDate,
  experienceEndDate,
  description,
}) {
  return (
    <div>
      <p>{jobTitle}</p>
      <p> {company}</p>
      <p> {experienceStartDate}</p>
      <p> {experienceEndDate}</p>
      <p> {description}</p>
    </div>
  );
}
