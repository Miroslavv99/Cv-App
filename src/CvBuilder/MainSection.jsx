import { useState } from "react";
import { FormSection } from "./FormSection";
import { CvPreview } from "./cv-sections/CvPreview";
import { GeneralSection } from "./cv-sections/GeneralSection";

export function MainSection() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const [isOpen, setIsOpen] = useState({
    general: false,
    education: false,
    professional: false,
    skills: false,
  });

  const [editButtonVisibility, setVisibility] = useState(false);

  function toggleOpen(key) {
    switch (key) {
      case "general":
        setIsOpen((prev) => ({ ...prev, general: !prev.general }));
    }
  }

  function handleGeneralInfo(e) {
    e.preventDefault();

    setGeneralInfo((prev) => ({
      ...prev,
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      city: e.target.city.value,
    }));
  }

  function submitHandler(e) {
    handleGeneralInfo(e);
    toggleOpen("general");
  }

  return (
    <>
      <main>
        <FormSection
          isOpen={isOpen}
          editButtonVisibility={editButtonVisibility}
          setIsOpen={toggleOpen}
          submitHandler={submitHandler}
        />
        <CvPreview>
          <GeneralSection name={generalInfo.name} email={generalInfo.email} />
        </CvPreview>
      </main>
    </>
  );
}
