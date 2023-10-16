import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import en from "date-fns/locale/en-US";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("en", en);

export default function Experience() {
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
      <p className="form-section">Experience</p>
      <form>
        <div className="form-group">
          <label htmlFor="employer">Employer</label>
          <input
            type="text"
            placeholder="employer"
            className="form-input-text"
            name="employer"
            id="employer"
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            placeholder="jobTitle"
            className="form-input-text"
            name="jobTitle"
            id="jobTitle"
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
          <label htmlFor="state">State</label>
          <input
            type="text"
            placeholder="state"
            className="form-input-text"
            name="state"
            id="state"
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
