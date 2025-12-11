import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { CvPreview } from "./cv-sections/CvPreview";
import { GeneralSection } from "./cv-sections/GeneralSection";

export function MainSection() {
  const [generalInfo, setInfo] = useState({
    name: "",
    email: "",
    number: "",
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
    }
  }

  return (
    <>
      <main>
        <Sidebar info={generalInfo} setInfo={handleInfo} />
        <CvPreview>
          <GeneralSection name={generalInfo.name} />
        </CvPreview>
      </main>
    </>
  );
}
