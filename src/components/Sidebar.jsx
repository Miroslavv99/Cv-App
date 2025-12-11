import { DropDownMenu } from "./DropDownMenu";
import { GeneralForm } from "../features/forms/GeneralForm";

export function Sidebar({ info, setInfo }) {
  return (
    <>
      <section className="sidebar">
        <DropDownMenu title="General Information">
          <GeneralForm info={info} setInfo={setInfo} />
        </DropDownMenu>
        <DropDownMenu title="Education Experience" />
        <DropDownMenu title="Professional Experience" />
      </section>
    </>
  );
}
