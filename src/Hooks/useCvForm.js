import { useState } from "react";

export function useCvForm() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
  });

  const [educationInfo, setEducationInfo] = useState({
    degree: "",
  });

  const [isOpen, setIsOpen] = useState({
    general: false,
    education: false,
    professional: false,
    skills: false,
  });

  const [editButtonVisible, setVisibility] = useState({
    general: false,
    education: false,
    professional: false,
    skills: false,
  });

  function toggleVisibility(key) {
    switch (key) {
      case "general":
        setVisibility((prev) => ({ ...prev, general: true }));
        break;
      case "education":
        setVisibility((prev) => ({ ...prev, education: true }));
        break;
    }
  }

  function toggleOpen(key) {
    switch (key) {
      case "general":
        setIsOpen((prev) => ({ ...prev, general: !prev.general }));
        break;
      case "education":
        setIsOpen((prev) => ({ ...prev, education: !prev.education }));
        break;
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

  function handleEducationInfo(e) {
    e.preventDefault();

    setEducationInfo((prev) => ({
      ...prev,
      degree: e.target.degree.value,
    }));
  }

  function submitHandler(e, key) {
    switch (key) {
      case "general":
        {
          handleGeneralInfo(e);
          toggleOpen("general");
          toggleVisibility(key);
        }
        break;
      case "education":
        {
          handleEducationInfo(e);
          toggleOpen("education");
          toggleVisibility(key);
        }
        break;
    }
  }

  return {
    generalInfo,
    isOpen,
    editButtonVisible,
    toggleOpen,
    submitHandler,
    educationInfo,
  };
}
