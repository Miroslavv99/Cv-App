import { DropDownMenu } from "./DropDownMenu";
import { GeneralForm } from "../features/forms/GeneralForm";

export function Sidebar({ info, setInfo }) {
  return (
    <>
      <section className="sidebar">
        <DropDownMenu title="General Information" image="general">
          <GeneralForm info={info} setInfo={setInfo} />
        </DropDownMenu>
        <DropDownMenu title="Education Experience" image={"education"} />
        <DropDownMenu title="Professional Experience" image={"expercience"} />
        <DropDownMenu title="Computer Skills" image={"skills"} />
      </section>
    </>
  );
}
