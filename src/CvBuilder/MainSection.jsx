import { FormSection } from "./FormSection";
import { CvPreview } from "./cv-sections/CvPreview";
import { GeneralSection } from "./cv-sections/GeneralSection";
import { EducationSection } from "./cv-sections/EducationSection";
import { ProfessionalSection } from "./cv-sections/ProfessionalSection";
import { useCvForm } from "../Hooks/useCvForm";

export function MainSection() {
  const {
    generalInfo,
    isOpen,
    editButtonVisible,
    toggleOpen,
    submitHandler,
    educationInfo,
    professionlaInfo,
  } = useCvForm();
  return (
    <>
      <main>
        <FormSection
          isOpen={isOpen}
          editButtonVisible={editButtonVisible}
          setIsOpen={toggleOpen}
          submitHandler={submitHandler}
        />
        <CvPreview>
          <GeneralSection
            name={generalInfo.name}
            email={generalInfo.email}
            phone={generalInfo.phone}
            city={generalInfo.city}
          />
          {editButtonVisible.education ? (
            <EducationSection
              degree={educationInfo.degree}
              school={educationInfo.school}
              country={educationInfo.country}
              startDate={educationInfo.startDate}
              endDate={educationInfo.endDate}
            />
          ) : null}

          <ProfessionalSection
            jobTitle={professionlaInfo.jobTitle}
            company={professionlaInfo.company}
            experienceStartDate={professionlaInfo.experienceStartDate}
            experienceEndDate={professionlaInfo.experienceEndDate}
            description={professionlaInfo.description}
          />
        </CvPreview>
      </main>
    </>
  );
}
