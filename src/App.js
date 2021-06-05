import "./App.css";
import Tooltip from "react-tooltip-lite";

import Mypic from "./images/my_pic.jpg";
import Projects from "./project.js";
import Experience from "./experience.js";
import Badminton from "./images/badminton.png";
import Gym from "./images/gym.png";
import Friends from "./images/friends.png";
import Films from "./images/films.png";
import Dance from "./images/dance.png";
import Renovation from "./images/renovation.png";
import Instagram from "./images/instagram.png";
import Github from "./images/github.png";
import LinkedIn from "./images/linkedin.png";

import React, { Component } from "react";
class App extends Component {
  state = {
    homeFlag: true,
    aboutFlag: false,
    skillsflag: false,
    projectflag: false,
    experienceflag: false,
    interestflag: false,
    contactflag: false,
    adjective: "Enthusiastic",
    allProjectsFlag: true,
    fullstackprojectsflag: false,
    otherprojectsflag: false,
  };

  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState({
          adjective:
            this.state.adjective === "Enthusiastic"
              ? "Passionate"
              : "Enthusiastic",
        }),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="app container">
        <div className="row navbarrow">
          <div className="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-4 col-xxl-4">
            <h1>Aarthi</h1>
          </div>
          <div className="col-24 col-sm-24 col-md-12 col-lg-10 col-xl-8 col-xxl-8">
            <nav className="navcontent row">
              <a
                className="col-3 col-lg-1 navlink "
                aria-current="page"
                href="#home"
                id={this.state.homeFlag === true ? "selectedTab" : ""}
                onClick={() =>
                  this.setState({
                    homeFlag: true,
                    aboutFlag: false,
                    skillsflag: false,
                    projectflag: false,
                    experienceflag: false,
                    interestflag: false,
                    resumeflag: false,
                    contactflag: false,
                  })
                }
              >
                HOME
              </a>
              <a
                className="col-3 col-lg-1 navlink"
                href="#aboutskill"
                id={this.state.aboutFlag === true ? "selectedTab" : ""}
                onClick={() =>
                  this.setState({
                    homeFlag: false,
                    aboutFlag: true,
                    skillsflag: false,
                    projectflag: false,
                    experienceflag: false,
                    interestflag: false,
                    resumeflag: false,
                    contactflag: false,
                  })
                }
              >
                ABOUT
              </a>
              <a
                className="col-3 col-lg-1 navlink"
                href="#aboutskill"
                id={this.state.skillsflag === true ? "selectedTab" : ""}
                onClick={() =>
                  this.setState({
                    homeFlag: false,
                    aboutFlag: false,
                    skillsflag: true,
                    projectflag: false,
                    experienceflag: false,
                    interestflag: false,
                    resumeflag: false,
                    contactflag: false,
                  })
                }
              >
                SKILLS
              </a>
              <a
                className="col-3 col-lg-2 navlink"
                href="#project"
                id={this.state.projectflag === true ? "selectedTab" : ""}
                onClick={() =>
                  this.setState({
                    homeFlag: false,
                    aboutFlag: false,
                    skillsflag: false,
                    projectflag: true,
                    experienceflag: false,
                    interestflag: false,
                    resumeflag: false,
                    contactflag: false,
                  })
                }
              >
                PROJECT
              </a>
              <a
                className="col-3 col-lg-2 navlink"
                href="#experience"
                id={this.state.experienceflag === true ? "selectedTab" : ""}
                onClick={() =>
                  this.setState({
                    homeFlag: false,
                    aboutFlag: false,
                    skillsflag: false,
                    projectflag: false,
                    experienceflag: true,
                    interestflag: false,
                    resumeflag: false,
                    contactflag: false,
                  })
                }
              >
                EXPERIENCE
              </a>
              <a
                className="col-3 col-lg-2 navlink"
                href="#interest"
                id={this.state.interestflag === true ? "selectedTab" : ""}
                onClick={() =>
                  this.setState({
                    homeFlag: false,
                    aboutFlag: false,
                    skillsflag: false,
                    projectflag: false,
                    experienceflag: false,
                    interestflag: true,
                    resumeflag: false,
                    contactflag: false,
                  })
                }
              >
                INTEREST
              </a>
              <a
                className="col-3 col-lg-1 navlink"
                href="#resume"
                id={this.state.interestflag === true ? "selectedTab" : ""}
                onClick={() =>
                  this.setState({
                    homeFlag: false,
                    aboutFlag: false,
                    skillsflag: false,
                    projectflag: false,
                    experienceflag: false,
                    interestflag: false,
                    resumeflag: true,
                    contactflag: false,
                  })
                }
              >
                RESUME
              </a>
              <a
                className="col-3 col-lg-2 navlink"
                href="#contact"
                id={this.state.contactflag === true ? "selectedTab" : ""}
                onClick={() =>
                  this.setState({
                    homeFlag: false,
                    aboutFlag: false,
                    skillsflag: false,
                    projectflag: false,
                    experienceflag: false,
                    interestflag: false,
                    resumeflag: false,
                    contactflag: true,
                  })
                }
              >
                CONTACT
              </a>
            </nav>
          </div>
        </div>
        <div className="row homePage" id="home">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mypic">
            <img
              src={Mypic}
              className="aarthiportfolio"
              alt="aarthiportfolio"
            ></img>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 homeintro">
            <h3 className="banner">-Hey there! This is me </h3>
            <h2 className="name">Aarthi</h2>
            {this.state.adjective === "Enthusiastic" ? "An" : "A"}{" "}
            <span className="adjective">{this.state.adjective}</span> full stack
            web developer, trying to pave my way towards enriching web.
          </div>
        </div>
        <div className="row aboutskillPage" id="aboutskill">
          <div className="col-12 col-md-7 col-lg-6 aboutMe" id="about">
            <h1 style={{ color: "black" }} className="aboutHeader">
              About Me
              <span
                className="scrollUp"
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
              >
                <img
                  alt="arrow up"
                  style={{ float: "right" }}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiBRsEAQ4hCvtdAAAA2UlEQVRIx6XTMQ5EUBCA4b8RtNtvr3EJB9EpuJgDkKyjOIBE4goSbwtZi5j33jDdFN/fTAbsk5HxYEoWFson3GDuJn78ZmLPbyTOXJnY845OmzjyiEiXOHNAk7jiioTEPRM27pGQeEzsk5B4yshI6krIfMJgmOyJwsHtiQKGbf0QXnJbYoBq45HI5UQFUDHTCnxkFBIt88oBXruLHHlCIiSOSuSAJeHFFQmJeyZs3CPh4o6ED7ckfLmQ0PDLRK/i50QPtZIfEzWENEr+TzTr/wbkvFUc4E1OAF9G12oNYFAoGwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNS0yN1QwNDowMToxNCswMjowMGnicWkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDUtMjdUMDQ6MDE6MTQrMDI6MDAYv8nVAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="
                />
              </span>
            </h1>

            <div className="aboutContent">
              After two and half years of working in automation testing, the
              urge to develop something new on my own and dive further into tech
              grew too strong to ignore. I love every aspect of bringing an idea
              to fruition and find each step of the way exciting. Full stack
              development gave me a platform to convert my ideas into real world
              application and deliver sites which do matter. I love to learn new
              technologies and work on it to expose myself in competitive
              environment which in turn help me to achieve personal and
              organisation goals.
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-6 skills" id="skills">
            <h1 style={{ color: "black" }}>
              Skills
              <span
                className="scrollUp"
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
              >
                <img
                  alt="arrow up"
                  style={{ float: "right" }}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiBRsEAQ4hCvtdAAAA2UlEQVRIx6XTMQ5EUBCA4b8RtNtvr3EJB9EpuJgDkKyjOIBE4goSbwtZi5j33jDdFN/fTAbsk5HxYEoWFson3GDuJn78ZmLPbyTOXJnY845OmzjyiEiXOHNAk7jiioTEPRM27pGQeEzsk5B4yshI6krIfMJgmOyJwsHtiQKGbf0QXnJbYoBq45HI5UQFUDHTCnxkFBIt88oBXruLHHlCIiSOSuSAJeHFFQmJeyZs3CPh4o6ED7ckfLmQ0PDLRK/i50QPtZIfEzWENEr+TzTr/wbkvFUc4E1OAF9G12oNYFAoGwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNS0yN1QwNDowMToxNCswMjowMGnicWkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDUtMjdUMDQ6MDE6MTQrMDI6MDAYv8nVAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="
                />
              </span>
            </h1>
            <div className="row skillscontent">
              <div className="col-12 skillItem javascript">
                <h4>
                  Javascript: <span className="scoreText">90%</span>
                </h4>
                <div className="score">
                  <div
                    className="scorebar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div className="col-12 skillItem react">
                <h4>
                  React: <span className="scoreText">90%</span>
                </h4>
                <div className="score">
                  <div
                    className="scorebar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div className="col-12 skillItem html5">
                <h4>
                  HTML 5: <span className="scoreText">85%</span>
                </h4>
                <div className="score">
                  <div
                    className="scorebar"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div className="col-12 skillItem css3">
                <h4>
                  CSS 3: <span className="scoreText">80%</span>
                </h4>
                <div className="score">
                  <div
                    className="scorebar"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              <div className="col-12 skillItem nodejs">
                <h4>
                  NodeJS: <span className="scoreText">75%</span>
                </h4>
                <div className="score">
                  <div
                    className="scorebar"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>

              <div className="col-12 skillItem expressjs">
                <h4>
                  ExpressJS: <span className="scoreText">85%</span>
                </h4>
                <div className="score">
                  <div
                    className="scorebar"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div className="col-12 skillItem mongodb">
                <h4>
                  MongoDB: <span className="scoreText">85%</span>
                </h4>
                <div className="score">
                  <div
                    className="scorebar"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div className="col-12 skillItem sql">
                <h4>
                  MYSQL: <span className="scoreText">90%</span>
                </h4>
                <div className="score">
                  <div
                    className="scorebar"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div className="col-12 skillItem java">
                <h4>
                  Java: <span className="scoreText">85%</span>
                </h4>
                <div className="score">
                  <div
                    className="scorebar"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row project" id="project">
          <div className="col-12">
            <h1 style={{ color: "black" }}>Projects</h1>
            <span
              className="scrollUp"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              <img
                alt="arrow up"
                style={{ float: "right" }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiBRsEAQ4hCvtdAAAA2UlEQVRIx6XTMQ5EUBCA4b8RtNtvr3EJB9EpuJgDkKyjOIBE4goSbwtZi5j33jDdFN/fTAbsk5HxYEoWFson3GDuJn78ZmLPbyTOXJnY845OmzjyiEiXOHNAk7jiioTEPRM27pGQeEzsk5B4yshI6krIfMJgmOyJwsHtiQKGbf0QXnJbYoBq45HI5UQFUDHTCnxkFBIt88oBXruLHHlCIiSOSuSAJeHFFQmJeyZs3CPh4o6ED7ckfLmQ0PDLRK/i50QPtZIfEzWENEr+TzTr/wbkvFUc4E1OAF9G12oNYFAoGwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNS0yN1QwNDowMToxNCswMjowMGnicWkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDUtMjdUMDQ6MDE6MTQrMDI6MDAYv8nVAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="
              />
            </span>
          </div>
          <div className="col-12 projectHeader">
            <div className="row">
              <div
                className="col-4 projectheader"
                id={
                  this.state.allProjectsFlag === true ? "projectSelected" : ""
                }
                onClick={() =>
                  this.setState({
                    allProjectsFlag: true,
                    fullstackprojectsflag: false,
                    otherprojectsflag: false,
                  })
                }
              >
                All Projects
              </div>
              <div
                className="col-4 projectheader"
                id={
                  this.state.fullstackprojectsflag === true
                    ? "projectSelected"
                    : ""
                }
                onClick={() =>
                  this.setState({
                    allProjectsFlag: false,
                    fullstackprojectsflag: true,
                    otherprojectsflag: false,
                  })
                }
              >
                Full Stack
              </div>
              <div
                className="col-4 projectheader"
                id={
                  this.state.otherprojectsflag === true ? "projectSelected" : ""
                }
                onClick={() =>
                  this.setState({
                    allProjectsFlag: false,
                    fullstackprojectsflag: false,
                    otherprojectsflag: true,
                  })
                }
              >
                Other Projects
              </div>
            </div>
          </div>

          <div className="col-12 projectContent">
            <div className="row">
              {Projects.map((project, index) => {
                if (
                  this.state.allProjectsFlag === true ||
                  (this.state.fullstackprojectsflag === true &&
                    project.projectType === "fullstack") ||
                  (this.state.otherprojectsflag === true &&
                    project.projectType !== "fullstack")
                )
                  return (
                    <div
                      className="col-12 col-sm-6 col-md-4"
                      key={project.name + index}
                    >
                      <div className="projectCard">
                        <img
                          src={project.imgUSrc}
                          className="card-img-top cardImg"
                          alt={project.name}
                        />
                        <div className="card-body">
                          <h3
                            className="card-title title"
                            style={{ color: "black" }}
                          >
                            {project.name}
                          </h3>
                          <p className="card-text description">
                            {project.description}
                          </p>
                          <div className="butnHolder">
                            <a
                              href={project.pageUrl}
                              target="_blank"
                              className="btn btn-danger "
                              rel="noreferrer"
                            >
                              Visit
                            </a>
                            <a
                              href={project.gitUrl}
                              className="btn btn-danger"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i
                                className="fa fa-github"
                                aria-hidden="true"
                              ></i>{" "}
                              view in git
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                return "";
              })}
            </div>
          </div>
        </div>
        <div className="row experience" id="experience">
          <div className="col-12">
            <h1 style={{ color: "black" }}>Experience</h1>
            <span
              className="scrollUp"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              <img
                alt="arrow up"
                style={{ float: "right" }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiBRsEAQ4hCvtdAAAA2UlEQVRIx6XTMQ5EUBCA4b8RtNtvr3EJB9EpuJgDkKyjOIBE4goSbwtZi5j33jDdFN/fTAbsk5HxYEoWFson3GDuJn78ZmLPbyTOXJnY845OmzjyiEiXOHNAk7jiioTEPRM27pGQeEzsk5B4yshI6krIfMJgmOyJwsHtiQKGbf0QXnJbYoBq45HI5UQFUDHTCnxkFBIt88oBXruLHHlCIiSOSuSAJeHFFQmJeyZs3CPh4o6ED7ckfLmQ0PDLRK/i50QPtZIfEzWENEr+TzTr/wbkvFUc4E1OAF9G12oNYFAoGwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNS0yN1QwNDowMToxNCswMjowMGnicWkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDUtMjdUMDQ6MDE6MTQrMDI6MDAYv8nVAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="
              />
            </span>
          </div>
          <div className="experience-card col-12">
            <div className="row">
              <span style={{ fontFamily: "Poiret One,cursive" }}>
                click card for details
              </span>
            </div>
          </div>
          {Experience.map((experience, index) => {
            return (
              <div
                className="row experienceRoadmap"
                style={{ marginTop: "25px" }}
                key={experience.id}
              >
                {index % 2 === 0 ? (
                  <div
                    className="col-9 col-sm-5 experienceCard"
                    onClick={() =>
                      document.getElementById(experience.id).style.display ===
                      "none"
                        ? (document.getElementById(
                            experience.id
                          ).style.display = "inline-block")
                        : (document.getElementById(
                            experience.id
                          ).style.display = "none")
                    }
                  >
                    <div
                      className="jobtitletitle row"
                      style={{ paddingTop: "10px", paddingBottom: "10px" }}
                    >
                      <h5
                        className="col-12 col-sm-6 col-md-7"
                        style={{ color: "black" }}
                      >
                        {experience.designation}
                      </h5>
                      <span className="col-12 col-sm-6 col-md-5">
                        <img
                          src={experience.logo}
                          alt="genesyslogo"
                          height="50px"
                        />
                      </span>
                    </div>
                    <h5 style={{ color: "#e73827" }}>{experience.company}</h5>
                    <div className="timeperiod" style={{ float: "right" }}>
                      {experience.duration}
                    </div>

                    <ul
                      className="experiencedescription"
                      id={experience.id}
                      style={{ display: "none" }}
                    >
                      {experience.description.map((des, index) => {
                        return <li key={index}>{des}</li>;
                      })}
                    </ul>
                  </div>
                ) : (
                  <div className="col-1 col-sm-5" />
                )}
                <div className="col-2 experienceImage">
                  <img src={experience.imagelogo} alt="workexp" height="50px" />
                </div>
                {index % 2 === 0 ? (
                  <div className="col-1 col-sm-3"></div>
                ) : (
                  <div
                    className="col-9 col-sm-5 experienceCard "
                    onClick={() =>
                      document.getElementById(experience.id).style.display ===
                      "none"
                        ? (document.getElementById(
                            experience.id
                          ).style.display = "inline-block")
                        : (document.getElementById(
                            experience.id
                          ).style.display = "none")
                    }
                  >
                    <div
                      className="jobtitletitle row"
                      style={{ paddingTop: "10px", paddingBottom: "10px" }}
                    >
                      <h5
                        className="col-12 col-sm-6 col-md-7"
                        style={{ color: "black" }}
                      >
                        {experience.designation}
                      </h5>
                      <span className="col-12 col-sm-6 col-md-5">
                        <img
                          src={experience.logo}
                          alt="genesyslogo"
                          height="50px"
                        />
                      </span>
                    </div>
                    <h5 style={{ color: "#e73827" }}>{experience.company}</h5>
                    <div className="timeperiod" style={{ float: "right" }}>
                      {experience.duration}
                    </div>
                    <ul
                      className="experiencedescription"
                      id={experience.id}
                      style={{ display: "none" }}
                    >
                      {experience.description.map((des, index) => {
                        return <li key={index}>{des}</li>;
                      })}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="row interest" id="interest">
          <div className="col-12">
            <h1 style={{ color: "white", fontFamily: "Poiret One, cursive" }}>
              When I'm not coding, you can find me...
            </h1>
            <span
              className="scrollUp"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              <img
                alt="arrow up"
                style={{ float: "right" }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiBRsEAQ4hCvtdAAAA2UlEQVRIx6XTMQ5EUBCA4b8RtNtvr3EJB9EpuJgDkKyjOIBE4goSbwtZi5j33jDdFN/fTAbsk5HxYEoWFson3GDuJn78ZmLPbyTOXJnY845OmzjyiEiXOHNAk7jiioTEPRM27pGQeEzsk5B4yshI6krIfMJgmOyJwsHtiQKGbf0QXnJbYoBq45HI5UQFUDHTCnxkFBIt88oBXruLHHlCIiSOSuSAJeHFFQmJeyZs3CPh4o6ED7ckfLmQ0PDLRK/i50QPtZIfEzWENEr+TzTr/wbkvFUc4E1OAF9G12oNYFAoGwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNS0yN1QwNDowMToxNCswMjowMGnicWkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDUtMjdUMDQ6MDE6MTQrMDI6MDAYv8nVAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="
              />
            </span>
          </div>
          <div className="col-6 col-sm-4 hobby">
            <img
              className="col-12"
              src={Badminton}
              alt="badmintohobby"
              style={{ borderRadius: "50%" }}
            />
            <div className="col-12">
              <h4 className="hobbyheading">Playing Badminton</h4>
            </div>
          </div>

          <div className="col-6 col-sm-4  hobby">
            <img
              className="col-12"
              src={Gym}
              alt="gym"
              style={{ borderRadius: "50%" }}
            />
            <div className="col-12">
              <h4 className="hobbyheading">At a gym</h4>
            </div>
          </div>

          <div className="col-6 col-sm-4 hobby">
            <img
              className="col-12"
              src={Friends}
              alt="friends"
              style={{ borderRadius: "50%" }}
            />
            <div className="col-12">
              <h4 className="hobbyheading">Visiting Friends</h4>
            </div>
          </div>

          <div className="col-6 col-sm-4 hobby">
            <img
              className="col-12"
              src={Films}
              alt="films"
              style={{ borderRadius: "50%" }}
            />
            <div className="col-12">
              <h4 className="hobbyheading">
                Watching documentaries and series
              </h4>
            </div>
          </div>

          <div className="col-6 col-sm-4  hobby">
            <img
              className="col-12"
              src={Dance}
              alt="dance"
              style={{ borderRadius: "50%" }}
            />
            <div className="col-12">
              <h4 className="hobbyheading">Dancing</h4>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-lg-2 hobby">
            <img
              className="col-12"
              src={Renovation}
              alt="renovation"
              style={{ borderRadius: "50%" }}
            />
            <div className="col-12">
              <h4 className="hobbyheading">Renovating</h4>
            </div>
          </div>
        </div>
        <div className="row contact" id="contact">
          <footer className="footerClass col-12">
            <div className="row">
              <div className="col-2">
                <a
                  href="https://github.com/aarthi-k-lab/"
                  target="_blank"
                  rel="noreferrer"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="visit GitHub Profile"
                >
                  <img src={Github} alt="github" height="50px" />
                </a>
              </div>
              <div className="col-2">
                <a
                  href="https://www.linkedin.com/in/aarthi-k-244aa9164/"
                  target="_blank"
                  rel="noreferrer"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="visit Linkedin Profile"
                >
                  <img src={LinkedIn} alt="linkedin" height="50px" />
                </a>
              </div>
              <div className="col-2">
                <a
                  href="mailto:aarthikannan2103@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Mail me"
                >
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/mail.png"
                    height="50px"
                    alt="mail"
                  />
                </a>
              </div>
              <div className="col-2">
                <a
                  href="https://www.instagram.com/a.a.r.t.h.i_/"
                  target="_blank"
                  rel="noreferrer"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="visit Instagram Profile"
                >
                  <img src={Instagram} alt="instagram" height="50px" />
                </a>
              </div>
              <div className="col-2" style={{ cursor: "pointer" }}>
                <Tooltip
                  content="To connect Further: 9578088335"
                  direction="top"
                  background="#ee5143"
                  color="white"
                >
                  <img
                    src="https://img.icons8.com/metro/26/000000/android.png"
                    alt="phone"
                    height="50px"
                  />
                </Tooltip>
              </div>
              <div className="col-2">
                <a
                  href="https://www.google.com/maps/@9.9095038,78.1013999,19.3z"
                  target="_blank"
                  rel="noreferrer"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="view my location in maps"
                >
                  <img
                    src="https://img.icons8.com/metro/26/000000/marker.png"
                    alt="map"
                    height="50px"
                  />
                </a>
              </div>
            </div>
            <div className="row">
              <span
                className="scrollUp"
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
              >
                <img
                  alt="arrow up"
                  style={{ float: "right" }}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiBRsEAQ4hCvtdAAAA2UlEQVRIx6XTMQ5EUBCA4b8RtNtvr3EJB9EpuJgDkKyjOIBE4goSbwtZi5j33jDdFN/fTAbsk5HxYEoWFson3GDuJn78ZmLPbyTOXJnY845OmzjyiEiXOHNAk7jiioTEPRM27pGQeEzsk5B4yshI6krIfMJgmOyJwsHtiQKGbf0QXnJbYoBq45HI5UQFUDHTCnxkFBIt88oBXruLHHlCIiSOSuSAJeHFFQmJeyZs3CPh4o6ED7ckfLmQ0PDLRK/i50QPtZIfEzWENEr+TzTr/wbkvFUc4E1OAF9G12oNYFAoGwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNS0yN1QwNDowMToxNCswMjowMGnicWkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDUtMjdUMDQ6MDE6MTQrMDI6MDAYv8nVAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="
                />
              </span>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
