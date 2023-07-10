/* eslint-disable @next/next/no-img-element */
import { Fragment, useContext, useState } from "react";
import NavContext from "../context/navContext";
import {
  ImgSideBar,
  SliderSideBar,
  VideoSideBar,
  YoutubeSideBar,
} from "./WorkSideBar";

const workData = [
  {
    img: "img/projects/e-learning_1.png",
    name: "E-learning Customization",
    format: "img",
    project: "WEBSITE",
    client: "COOP Bank",
    duration: "3 MONTHS",
    technologies: ["HTML", "JS", "PHP"],
    budget: "350 USD",
    url: "http://learn.coopbank.local/",
  },
  {
    img: "img/projects/los_1.png",
    name: "LOAN ORIGINATION SYSTEM",
    format: "img",
    project: "WEBSITE",
    client: "COOP BANK",
    duration: "3 MONTHS",
    technologies: ["HTML", "JAVASCRIPT", "REACT", "NODEJS", "PYTHON", "JAVA"],
    budget: "350 USD",
    url: "http://apps.coopbank.local/LOS/",
  },
  {
    img: "img/projects/legal_request_1.png",
    name: "LEGAL REQUEST SYSTEM",
    format: "slider",
    project: "WEBSITE",
    client: "COOP BANK",
    duration: "5 MONTHS",
    technologies: ["HTML", "JAVASCRIPT", "REACT", "NODEJS", "PYTHON", "JAVA"],
    budget: "350 USD",
    url: "http://apps.coopbank.local/legal/",
  },
  {
    img: "img/projects/equb_1.png",
    name: "DIGITAL EQUB",
    format: "img",
    project: "WEBSITE",
    client: "COOP BANK",
    duration: "3 MONTHS",
    technologies: ["HTML", "JS", "REACT", "NODEJS", "JAVA"],
    budget: "1000 USD",
    url: "#",
  },
  {
    img: "img/projects/doctor_1.png",
    name: "Doctor Consultancy System",
    format: "img",
    project: "WEBSITE",
    client: "Black Financial Solution",
    duration: "6 MONTHS",
    technologies: ["HTML", "JS", "PHP", "MYSQL", "BOOTSTRAP"],
    budget: "450 USD",
    url: "https://doctors.black-fs.com/",
  },
  {
    img: "img/projects/lawyer_1.png",
    name: "LAWYER CONSULTANCY SYSTEM",
    format: "img",
    project: "WEBSITE",
    client: "Black Financial Solution",
    duration: "6 MONTHS",
    technologies: ["HTML", "JS", "PHP", "MYSQL", "BOOTSTRAP"],
    budget: "300 USD",
    url: "https://meetlawyer.black-fs.com/",
  },
  {
    img: "img/projects/OMS.png",
    name: "Office Management System",
    format: "img",
    project: "WEBSITE",
    client: "Black Financial Solution",
    duration: "3 MONTHS",
    technologies: ["HTML", "JS", "PHP", "MYSQL", "JQUERY", "BOOTSTRAP"],
    budget: "300 USD",
    url: "http://black.is-best.net/Black/",
  },
  {
    img: "img/projects/social_1.png",
    name: "Social Media App",
    format: "img",
    project: "WEBSITE",
    client: "Personal",
    duration: "3 MONTHS",
    technologies: ["HTML", "JS", "REACT", "NODEJS", "MONGODB"],
    budget: "200 USD",
    url: "#",
  },
  {
    img: "img/projects/e-commerce_2.png",
    name: "E-commerce",
    format: "img",
    project: "WEBSITE",
    client: "Personal",
    duration: "3 MONTHS",
    technologies: ["HTML", "JS", "PHP", "MYSQL", "BOOTSTRAP"],
    budget: "200 USD",
    url: "#",
  },
];

const Work = () => {
  const { nav } = useContext(NavContext);
  const [active, setActive] = useState(null);
  return (
    <Fragment>
      <section id="work" className={`${nav === "work" ? "active" : ""}`}>
        <div
          className={`portfolio-container ${
            active ? "slide-out overflow-hidden" : ""
          }`}
        >
          {/* Main Heading Starts */}
          <div className="container page-title text-center">
            <h2 className="text-center">
              My <span>Projects</span>
            </h2>
            <span className="title-head-subtitle">
              a few recent software projects. Want to see more? Just Email me.
            </span>
          </div>
          {/* Main Heading Ends */}
          <div className="portfolio-section">
            <div className="container cd-container">
              <div>
                {/* Portfolio Items Starts */}
                <ul className="row" id="portfolio-items">
                  {workData.map((work, i) => (
                    <li className="col-12 col-md-6 col-lg-4" key={i}>
                      <a
                        href="#"
                        data-type="project-1"
                        onClick={() => setActive(i + 1)}
                      >
                        <img
                          src={work.img}
                          alt="Project"
                          className="img-fluid"
                        />
                        <div>
                          <span>{work.name}</span>
                        </div>
                      </a>
                      <div
                        style={{
                          backgroundColor: "#115c9e",
                          color: "white",
                          justifyContent: "center",
                          alignItem: "center",
                          padding: "7px",
                        }}
                        className="text-center"
                      >
                        <span>{work.name}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                {/* Portfolio Items Ends */}
              </div>
            </div>
          </div>
          {/* PORTFOLIO OVERLAY STARTS */}
          <div className="portfolio-overlay" onClick={() => setActive(null)} />
          {/* PORTFOLIO OVERLAY ENDS */}
        </div>
        {workData.map((work, i) => (
          <div
            key={i}
            className={`project-info-container project-1 ${
              active === i + 1 ? "slide-in" : ""
            }`}
          >
            {/* Main Content Starts */}
            <div className="project-info-main-content">
              {work.format == "img" ? (
                <ImgSideBar img={work.img} />
              ) : work.format == "youtube" ? (
                <YoutubeSideBar playing={active} />
              ) : work.format == "slider" ? (
                <SliderSideBar />
              ) : (
                <VideoSideBar playing={active} />
              )}
            </div>
            {/* Main Content Ends */}
            {/* Project Details Starts */}
            <div className="projects-info row">
              <div className="col-12 col-sm-6 p-none">
                <h3
                  className="font-weight-600 uppercase "
                  style={{ lineHeight: "1.2" }}
                >
                  {work.name}
                </h3>
                <ul className="project-details">
                  <li>
                    <i className="fa fa-file-text-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Project{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.project}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-user-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Client{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.client}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-hourglass-o" />
                    <span className="font-weight-400 project-label">
                      {" "}
                      Duration{" "}
                    </span>
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.duration}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-code" />{" "}
                    <span className="font-weight-400 project-label">
                      {" "}
                      Technologies
                    </span>{" "}
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.technologies.map((technologie, i) => (
                        <Fragment key={i}>{technologie + "  "}</Fragment>
                      ))}
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-money" />{" "}
                    <span className="font-weight-400 project-label">
                      {" "}
                      Budget
                    </span>{" "}
                    :{" "}
                    <span className="font-weight-600 uppercase">
                      {work.budget}
                    </span>
                  </li>
                </ul>
                <a
                  href={work.url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <span>
                    <i className="fa fa-external-link" />
                    preview
                  </span>
                </a>
              </div>
              <div className="col-6 p-none text-right">
                <a
                  href="#"
                  className="btn btn-secondary close-project"
                  onClick={() => setActive(null)}
                >
                  <span>
                    <i className="fa fa-close" />
                    Close
                  </span>
                </a>
              </div>
            </div>
            {/* Project Details Ends */}
          </div>
        ))}
      </section>
      {active && (
        <span
          className={`back-mobile ${active ? "is-visible" : ""}`}
          onClick={() => setActive(null)}
        >
          <i className="fa fa-arrow-left" />
        </span>
      )}
    </Fragment>
  );
};
export default Work;
