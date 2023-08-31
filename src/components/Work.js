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
    img: "img/projects/tele-doctor.png",
    name: "Tele Doctors",
    format: "img",
    project: "WEBSITE",
    client: "Demichaa",
    duration: "2 MONTHS",
    technologies: ["HTML", "JS", "PHP"],
    budget: "200 USD",
    url: "https://doctors.damichaa.com",
    desc:"Tele Doctor is a concise and informative medical website offering expert health advice, tips, and insights. Visitors can access a wide range of articles and resources covering various medical topics, wellness recommendations, treatment options, and preventive measures. With user-friendly navigation and trustworthy content, Doctor\'s Tip aims to empower individuals to make informed decisions about their health and well-being"
  },
  {
    img: "img/projects/tele-automotive.png",
    name: "Tele Automotive",
    format: "img",
    project: "WEBSITE",
    client: "Weelman",
    duration: "2 MONTHS",
    technologies: ["HTML", "JS", "PHP"],
    budget: "200 USD",
    url: "https://automotive.welmaan.com/",
    desc:"Explore our automotive tip website for expert advice and practical insights on all things automotive. From maintenance and repairs to buying guides and driving tips, we offer a comprehensive resource to help you navigate the world of cars with confidence"
  },

  {
    img: "img/projects/tele-lawyer2.png",
    name: "Tele Lawyer",
    format: "img",
    project: "WEBSITE",
    client: "Damichaa",
    duration: "2 MONTHS",
    technologies: ["HTML", "JS", "PHP"],
    budget: "200 USD",
    url: "https://lawyers.damichaa.com",
    desc:"Welcome to our lawyer tip website, where legal guidance meets practical advice. We provide concise and insightful tips on a variety of legal topics to help you navigate the complexities of the law with confidence. Our expert tips cover everything from understanding your rights to handling legal paperwork and making informed decisions. Whether you're facing a legal challenge or simply want to be better informed, our website is your go-to resource for clear and actionable legal insights."
  },
  {
    img: "img/projects/tele-pharmacy.png",
    name: "Tele Pharmacy",
    format: "img",
    project: "WEBSITE",
    client: "Weelman",
    duration: "2 MONTHS",
    technologies: ["HTML", "JS", "PHP"],
    budget: "200 USD",
    url: "https://pharma.meetconsultancy.com",
    desc:"Explore our pharmacy medical tip website for concise and valuable insights. Discover a range of health-related tips, medication guidance, and wellness advice curated by healthcare professionals. Enhance your understanding of medical topics and make informed decisions about your health and well-being."
  },
  {
    img: "img/projects/tele-entrepreneur.png",
    name: "Empowering Entrepreneurs",
    format: "img",
    project: "WEBSITE",
    client: "Weelman",
    duration: "2 MONTHS",
    technologies: ["HTML", "JS", "PHP"],
    budget: "200 USD",
    url: "https://entrepreneur.welmaan.com",
    desc:"Empowering Entrepreneurs is a website dedicated to equipping and motivating aspiring and seasoned entrepreneurs. Our platform offers a concise and insightful collection of tips, strategies, and resources to help entrepreneurs navigate challenges, seize opportunities, and drive their ventures toward success"
  },


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
    desc:"An e-Learning system website is a digital platform designed to facilitate online education and learning experiences. It provides a virtual environment where students and educators can interact, access educational resources, and participate in various educational activities. "

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
    desc:"A Loan Origination System (LOS) website is an online platform that facilitates the process of applying for and processing loans. It provides a user-friendly interface for borrowers, lenders, and loan officers to interact and manage various stages of the loan application, approval, and disbursal process."
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
    desc:"The Bank Legal Request System is a dedicated website that serves as a secure and streamlined platform for managing legal requests and inquiries for a bank. This online system facilitates communication and collaboration between the bank's legal team and external parties such as law enforcement agencies, regulatory authorities, and legal representatives."
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
    desc:"Digital EQUB is an online platform that offers a diverse collection of digital books, magazines, and educational materials. With a user-friendly interface, it provides access to a wide range of digital content spanning various genres, catering to readers of all ages. From classic literature to contemporary publications, Digital EQUB aims to enhance reading experiences in the digital age, promoting learning and entertainment through its extensive digital library."
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
    desc:"Meet Doctor is a concise and informative medical website offering expert health advice, tips, and insights. Visitors can access a wide range of articles and resources covering various medical topics, wellness recommendations, treatment options, and preventive measures. With user-friendly navigation and trustworthy content, Doctor\'s Tip aims to empower individuals to make informed decisions about their health and well-being"
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
    desc:"Welcome to our lawyer tip website, where legal guidance meets practical advice. We provide concise and insightful tips on a variety of legal topics to help you navigate the complexities of the law with confidence. Our expert tips cover everything from understanding your rights to handling legal paperwork and making informed decisions. Whether you're facing a legal challenge or simply want to be better informed, our website is your go-to resource for clear and actionable legal insights."
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
    desc:"An Office Management System website is designed to streamline and optimize administrative tasks and processes within an office environment. It serves as a digital platform that assists in managing various aspects of office operations efficiently."
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
    desc:"Discover a vibrant online community on our social media app website. Connect with friends, share your thoughts, and explore a world of photos, videos, and stories. Stay updated with real-time notifications, engage in meaningful conversations, and express yourself creatively. Join us today to experience a platform that brings people together, fostering connections and conversations in an innovative and user-friendly environment."
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
    desc:"An e-commerce website is an online platform where businesses or individuals can display and sell products or services to customers over the internet. It allows users to browse through a wide range of items, add them to a virtual shopping cart, and proceed to checkout for secure online payment."
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
                          {/* <span>{work.name}</span><br/><hr/> */}
                          <span style={{fontSize:"8px"}}>{work.desc}</span>
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
