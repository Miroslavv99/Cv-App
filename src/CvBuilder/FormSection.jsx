import { Accordion } from "./Accordion";
import { GeneralForm } from "./forms/GeneralForm";

export function FormSection({
  isOpen,
  editButtonVisibility,
  setIsOpen,
  submitHandler,
}) {
  return (
    <>
      <section className="form-section">
        <Accordion
          title="General Information"
          image="general"
          isOpen={isOpen.general}
          setIsOpen={setIsOpen}
        >
          <GeneralForm submit={submitHandler} />
        </Accordion>
        <Accordion title="Education Experience" image={"education"} />
        <Accordion title="Professional Experience" image={"expercience"} />
        <Accordion title="Computer Skills" image={"skills"} />
      </section>
    </>
  );
}
