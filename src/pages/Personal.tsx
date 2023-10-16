export default function Personal() {
  return (
    <div className="form">
      <p className="form-section">Personal Info</p>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            placeholder="first name"
            className="form-input-text"
            name="firstName"
            id="firstName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            placeholder="last name"
            className="form-input-text"
            name="lastName"
            id="lastName"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            placeholder="email"
            className="form-input-text"
            name="email"
            id="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNum">Phone Number</label>
          <input
            type="number"
            placeholder="phone"
            className="form-input-text"
            name="phoneNum"
            id="phoneNum"
          />
        </div>
        <div className="form-group">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            placeholder="website"
            className="form-input-text"
            name="website"
            id="website"
          />
        </div>
      </form>
    </div>
  );
}
