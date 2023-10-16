export default function Skills() {
  return (
    <div className="form">
      <p className="form-section">Skills</p>
      <form>
        <div className="form-group">
          <label htmlFor="skillSet">skillset</label>
          <input
            type="text"
            placeholder="e.g design"
            className="form-input-text"
            name="skillSet"
            id="skillSet"
          />
        </div>
        <div className="form-group">
          <label htmlFor="skill">skill</label>
          <input
            type="text"
            placeholder="e.g Illustration"
            className="form-input-text"
            name="skill"
            id="skill"
          />
        </div>
      </form>
    </div>
  );
}
