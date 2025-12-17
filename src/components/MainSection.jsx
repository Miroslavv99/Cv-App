import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { CvPreview } from "./cv-sections/CvPreview";
import { GeneralSection } from "./cv-sections/GeneralSection";

export function MainSection() {
  const [generalInfo, setInfo] = useState({
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

  function toggleOpen(key) {
    switch (key) {
      case "general":
        setIsOpen((prev) => ({ ...prev, general: !prev.general }));
    }
  }

  function handleInfo(e) {
    e.preventDefault();

    setInfo((prev) => ({
      ...prev,
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      city: e.target.city.value,
    }));
  }

  function submitHandler(e) {
    handleInfo(e);
    toggleOpen("general");
  }

  return (
    <>
      <main>
        <Sidebar
          info={generalInfo}
          isOpen={isOpen}
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
