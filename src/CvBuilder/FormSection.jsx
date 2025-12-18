import { Accordion } from "./Accordion";
import { GeneralForm } from "./forms/GeneralForm";
import { EducationForm } from "./forms/EducationForm";

export function FormSection({
  isOpen,
  setIsOpen,
  editButtonVisible,
  submitHandler,
}) {
  const generalProps = {
    title: "Information",
    image: "general",
    formIsOpen: isOpen.general,
    buttonVisible: editButtonVisible.general,
    setIsOpen: setIsOpen,
    openKey: "general",
  };

  const educationProps = {
    title: "Education Experience",
    image: "education",
    formIsOpen: isOpen.education,
    buttonVisible: editButtonVisible.education,
    setIsOpen: setIsOpen,
    openKey: "education",
  };

  return (
    <>
      <section className="form-section">
        <Accordion {...generalProps}>
          <GeneralForm submit={submitHandler} />
        </Accordion>
        <Accordion {...educationProps}>
          <EducationForm submit={submitHandler} />
        </Accordion>
        <Accordion title="Professional Experience" image={"expercience"} />
        <Accordion title="Computer Skills" image={"skills"} />
      </section>
    </>
  );
}
