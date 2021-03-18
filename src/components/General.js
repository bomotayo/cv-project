import React from "react";
import "../style.css";

class General extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    showResult: false,
    showForm: true,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    this.setState({ showResult: true, showForm: false });
    console.log(this.state);
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
      firstName,
      lastName,
      email,
      phone,
      showResult,
      showForm,
    } = this.state;

    return (
      <div className="general-sec">
        <form
          className="general-form"
          onSubmit={this.submitForm}
          style={showForm ? { display: "block" } : { display: "none" }}
        >
          <div className="form-row">
            <div className="form-row-sec">
              <label>First Name : </label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-row-sec">
              <label>Last Name : </label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-row-sec">
              <label>Email : </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-row-sec">
              <label>Phone Number : </label>
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="btn-section">
            <button id="gen-submit-btn" type="submit">
              Save
            </button>
          </div>
        </form>
        <div
          className="result"
          style={showResult ? { display: "block" } : { display: "none" }}
        >
          <div className="result-col">
            <div>
              <span className="result-title">First Name:</span> {firstName}
              <br />
              <span className="result-title">Last Name:</span> {lastName}
              <br />
              <span className="result-title">Email:</span> {email}
              <br />
              <span className="result-title">Phone:</span> {phone}
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

export default General;
