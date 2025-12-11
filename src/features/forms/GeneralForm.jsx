export function GeneralForm({ info, setInfo }) {
  return (
    <>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={info.name}
          onChange={setInfo}
          placeholder="Name"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={info.email}
          onChange={setInfo}
          placeholder="Email"
        />
      </form>
    </>
  );
}
