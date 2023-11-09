import { Component } from "react";
import project1 from "../img/project1.png";
import project2 from "../img/project2.png";
import project3 from "../img/project3.png";


class Portfolio extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Work</h1>
        <div className="hr_line line2">
          <div className="inner2 inner3"></div>
        </div>
        <div class="port_out port1">
          <div class="port_in">
            <a href="https://github.com/mafghal/te-finale-project-">
              <img
                src={project1}
                className="po1"
                alt="TE Locker management system"
              ></img>
            </a>
          </div>
        </div>
        <div class="port_out port2">
          <div class="port_in">
            <a href="https://github.com/mafghal/Budge_reactjs_app">
              <img
                src={project2}
                className="po1"
                alt="Budge reactjs app"
              ></img>
            </a>
          </div>
        </div>
        <div class="port_out port3">
          <div class="port_in">
            <a href="https://github.com/mafghal/training-center-management-application">
              <img src={project3} className="po1" alt="training center management application"></img>
            </a>
          </div>
        </div>
       
      </div>
    );
  }
}

export default Portfolio;
