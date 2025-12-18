import { FormSection } from "./FormSection";
import { CvPreview } from "./cv-sections/CvPreview";
import { GeneralSection } from "./cv-sections/GeneralSection";
import { EducationSection } from "./cv-sections/EducationSection";
import { useCvForm } from "../Hooks/useCvForm";

export function MainSection() {
  const {
    generalInfo,
    isOpen,
    editButtonVisible,
    toggleOpen,
    submitHandler,
    educationInfo,
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
          <GeneralSection name={generalInfo.name} email={generalInfo.email} />
          <EducationSection degree={educationInfo.degree} />
        </CvPreview>
      </main>
    </>
  );
}
