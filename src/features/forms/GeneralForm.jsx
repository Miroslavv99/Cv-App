export function GeneralForm({ name, nameFn }) {
  return (
    <>
      <form>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameFn}
          placeholder="name"
        />
      </form>
    </>
  );
}
