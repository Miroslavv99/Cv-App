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

  const [professionlaInfo, setProfessionalInfo] = useState({
    jobTitle: "",
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
      case "professional":
        setVisibility((prev) => ({ ...prev, professional: true }));
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
      case "professional":
        setIsOpen((prev) => ({ ...prev, professional: !prev.professional }));
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

  function handleProfessionlaInfo(e) {
    e.preventDefault();

    setProfessionalInfo((prev) => ({
      ...prev,
      jobTitle: e.target.jobTitle.value,
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
      case "professional": {
        handleProfessionlaInfo(e);
        toggleOpen("professional");
        toggleVisibility(key);
      }
    }
  }

  return {
    generalInfo,
    educationInfo,
    professionlaInfo,
    isOpen,
    editButtonVisible,
    toggleOpen,
    submitHandler,
  };
}
