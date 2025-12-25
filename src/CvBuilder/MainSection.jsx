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
          <EducationSection
            degree={educationInfo.degree}
            school={educationInfo.school}
            country={educationInfo.country}
            startDate={educationInfo.startDate}
            endDate={educationInfo.endDate}
          />
          <ProfessionalSection jobTitle={professionlaInfo.jobTitle} />
        </CvPreview>
      </main>
    </>
  );
}
