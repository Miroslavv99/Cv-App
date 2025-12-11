import { DropDownMenu } from "./DropDownMenu";
import { GeneralForm } from "../features/forms/GeneralForm";

export function Sidebar({ name, nameFn }) {
  return (
    <>
      <section className="sidebar">
        <DropDownMenu>
          <GeneralForm name={name} nameFn={nameFn} />
        </DropDownMenu>
        <DropDownMenu />
        <DropDownMenu />
        <h1>{name}</h1>
      </section>
    </>
  );
}
