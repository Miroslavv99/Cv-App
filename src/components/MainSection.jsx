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

  function handleInfo(e) {
    const input = e.target.id;
    switch (input) {
      case "name":
        setInfo((prev) => ({ ...prev, name: e.target.value }));
        break;
      case "email":
        setInfo((prev) => ({ ...prev, email: e.target.value }));
        break;
      case "phone":
        setInfo((prev) => ({ ...prev, number: e.target.value }));
        break;
      case "city":
        setInfo((prev) => ({ ...prev, city: e.target.value }));
        break;
    }
  }

  return (
    <>
      <main>
        <Sidebar info={generalInfo} setInfo={handleInfo} />
        <CvPreview>
          <GeneralSection name={generalInfo.name} email={generalInfo.email} />
        </CvPreview>
      </main>
    </>
  );
}
