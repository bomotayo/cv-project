import React from "react";
import uniqid from "uniqid";

import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends React.Component {
  state = { educationIds: [], experienceIds: [] };

  eduHandleClick = () => {
    this.setState({
      educationIds: [...this.state.educationIds, uniqid()],
    });
  };

  eduDelete = (id) => {
    this.setState({
      educationIds: this.state.educationIds.filter((ed) => ed !== id),
    });
  };

  educComponents = () => {
    return this.state.educationIds.map((id) => {
      return <Education key={id} id={id} onDel={this.eduDelete} />;
    });
  };

  expHandleClick = () => {
    this.setState({
      experienceIds: [...this.state.experienceIds, uniqid()],
    });
  };

  expDelete = (id) => {
    this.setState({
      experienceIds: this.state.experienceIds.filter((ed) => ed !== id),
    });
  };

  expComponents = () => {
    return this.state.experienceIds.map((id) => {
      return <Experience key={id} id={id} onDel={this.expDelete} />;
    });
  };

  render() {
    return (
      <div className="container">
        <h1>CV-App with React</h1>
        <h3 className="form-title">General Information</h3>
        <General />
        <h3 className="form-title">Educational Experience</h3>
        {this.educComponents()}
        <button id="add-btn" onClick={this.eduHandleClick}>
          Add
        </button>
        <h3 className="form-title">Experience Section</h3>
        {this.expComponents()}
        <button id="add-btn" onClick={this.expHandleClick}>
          Add
        </button>
      </div>
    );
  }
}

export default App;
