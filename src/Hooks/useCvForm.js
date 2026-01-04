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
    school: "",
    country: "",
    startDate: "",
    endDate: "",
  });

  const [professionlaInfo, setProfessionalInfo] = useState({
    jobTitle: "",
    company: "",
    experienceStartDate: "",
    experienceEndDate: "",
    description: "",
  });

  const [isOpen, setIsOpen] = useState({
    general: false,
    education: false,
    professional: false,
  });

  const [editButtonVisible, setVisibility] = useState({
    general: false,
    education: false,
    professional: false,
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
      school: e.target.school.value,
      country: e.target.country.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
    }));
  }

  function handleProfessionlaInfo(e) {
    e.preventDefault();

    setProfessionalInfo((prev) => ({
      ...prev,
      jobTitle: e.target.jobTitle.value,
      company: e.target.company.value,
      experienceStartDate: e.target.experienceStartDate.value,
      experienceEndDate: e.target.experienceEndDate.value,
      description: e.target.description.value,
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
