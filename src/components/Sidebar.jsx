import { DropDownMenu } from "./DropDownMenu";
import { GeneralForm } from "../features/forms/GeneralForm";

export function Sidebar({ info, isOpen, setIsOpen, submitHandler }) {
  console.log(isOpen);
  console.log(info);
  return (
    <>
      <section className="sidebar">
        <DropDownMenu
          title="General Information"
          image="general"
          isOpen={isOpen.general}
          setIsOpen={setIsOpen}
        >
          <GeneralForm info={info} submit={submitHandler} />
        </DropDownMenu>
        <DropDownMenu title="Education Experience" image={"education"} />
        <DropDownMenu title="Professional Experience" image={"expercience"} />
        <DropDownMenu title="Computer Skills" image={"skills"} />
      </section>
    </>
  );
}
