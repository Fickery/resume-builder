import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import en from "date-fns/locale/en-US";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("en", en);

export default function Education() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (date, name) => {
    if (name === "start") {
      setStartDate(date);
    } else {
      setEndDate(date);
    }
  };

  return (
    <div className="form">
      <p className="form-section">Education</p>
      <form>
        <div className="form-group">
          <label htmlFor="school">School</label>
          <input
            type="text"
            placeholder="school"
            className="form-input-text"
            name="school"
            id="school"
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            placeholder="city"
            className="form-input-text"
            name="city"
            id="city"
          />
        </div>
        <div className="form-group">
          <label htmlFor="level">Education level</label>
          <input
            type="text"
            placeholder="level"
            className="form-input-text"
            name="level"
            id="level"
          />
        </div>
        <div className="form-group">
          <label htmlFor="fieldStudy">Field Of Study</label>
          <input
            type="text"
            placeholder="e.g engineer"
            className="form-input-text"
            name="fieldStudy"
            id="fieldStudy"
          />
        </div>
        <div className="form-group">
          <label htmlFor="start-date">Start Date:</label>
          <DatePicker
            selected={startDate}
            className="form-input-text"
            onChange={(date) => handleDateChange(date, "start")}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="dd/MM/yyyy"
            locale="en"
          />
        </div>
        <div className="form-group">
          <label htmlFor="end-date">End Date:</label>
          <DatePicker
            selected={endDate}
            className="form-input-text"
            onChange={(date) => handleDateChange(date, "end")}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="dd/MM/yyyy"
            locale="en"
          />
        </div>
      </form>
    </div>
  );
}
