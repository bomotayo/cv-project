import React from "react";
import "../style.css";

class Experience extends React.Component {
  state = {
    companyName: "",
    posTitle: "",
    fromDate: "",
    toDate: "",
    mainTask: "",
    showResult: false,
    showForm: true,
    dateError: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();

    new Date(this.state.toDate) > new Date(this.state.fromDate)
      ? this.setState({ showResult: true, showForm: false, dateError: "" })
      : this.setState({ dateError: "To date cannot be before from date" });
  };

  onDelete = (e) => {
    e.preventDefault();
    return this.props.onDel(this.props.id);
  };

  editInput = (e) => {
    e.preventDefault();

    this.setState({
      showResult: false,
      showForm: true,
    });
  };

  render() {
    const {
      companyName,
      posTitle,
      fromDate,
      toDate,
      mainTask,
      showResult,
      showForm,
      dateError,
    } = this.state;

    return (
      <div className="education-sec">
        <form
          className="education-form"
          onSubmit={this.submitForm}
          style={showForm ? { display: "block" } : { display: "none" }}
        >
          <div className="form-row">
            <div className="form-row-sec">
              <label>Company Name : </label>
              <input
                type="text"
                name="companyName"
                value={companyName}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-row-sec">
              <label>Position Title : </label>
              <input
                type="text"
                name="posTitle"
                value={posTitle}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-row-sec">
              <label>From : </label>
              <input
                className="date-input"
                type="date"
                name="fromDate"
                value={fromDate}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-row-sec">
              <label>To : </label>
              <input
                className="date-input"
                type="date"
                name="toDate"
                value={toDate}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <textarea
              rows="4"
              cols="50"
              className="textarea-row-sec"
              placeholder="Main Tasks"
              type="text"
              name="mainTask"
              value={mainTask}
              onChange={this.handleChange}
              required
            />
          </div>
          <p className="date-error">{dateError}</p>

          <div className="btn-section">
            <button id="edu-submit-btn" type="submit">
              Save
            </button>
            <button id="edu-delete-btn" onClick={this.onDelete}>
              Delete
            </button>
          </div>
        </form>
        <div
          className="result"
          style={showResult ? { display: "block" } : { display: "none" }}
        >
          <div className="result-col">
            <div>
              <span className="result-title">Company Name:</span> {companyName}
              <br />
              <span className="result-title">Position Title:</span> {posTitle}
              <br />
              <span className="result-title">From:</span> {fromDate}
              <br />
              <span className="result-title">To:</span> {toDate}
              <br />
              <span className="result-title">Main Task(s):</span> {mainTask}
            </div>
            <div>
              <button className="edit-btn-sec" onClick={this.editInput}>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
