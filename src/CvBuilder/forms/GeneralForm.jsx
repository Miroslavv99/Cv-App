export function GeneralForm({ submit }) {
  return (
    <>
      <form onSubmit={submit}>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" placeholder="Name" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Email" />
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" placeholder="Phone" />
        <label htmlFor="city">City</label>
        <input type="text" id="city" name="city" placeholder="City" />
        <button className="save">Save</button>
      </form>
    </>
  );
}
