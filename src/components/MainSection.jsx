import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { CvPreview } from "./cv-sections/CvPreview";

export function MainSection() {
  const [name, setName] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  return (
    <>
      <main>
        <Sidebar name={name} nameFn={handleName} />
        <CvPreview />
      </main>
    </>
  );
}
