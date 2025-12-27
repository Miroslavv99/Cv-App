import { Accordion } from "./Accordion";
import { GeneralForm } from "./forms/GeneralForm";
import { EducationForm } from "./forms/EducationForm";
import { ProfessionalForm } from "./forms/ProfessionalForm";

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

  const professionalProps = {
    title: "Professional Experience",
    image: "professional",
    formIsOpen: isOpen.professional,
    buttonVisible: editButtonVisible.professional,
    setIsOpen: setIsOpen,
    openKey: "professional",
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
        <Accordion {...professionalProps}>
          <ProfessionalForm submit={submitHandler} />
        </Accordion>
      </section>
    </>
  );
}
