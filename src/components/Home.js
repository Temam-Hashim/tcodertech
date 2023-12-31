import { useContext } from "react";
// import Poster from "../../public/img/Timage.jpg";
import NavContext from "../context/navContext";
import AnimationText from "./AnimationText";

const Home = ({ leftImg, video, leftImgSrc }) => {
  const { nav, changeNav } = useContext(NavContext);
  return (
    <section id="home" className={`${nav === "home" ? "active" : ""}`}>
      <div className="container infos ">
        <div className="row personal-info ">
          {/* Personal Infos Starts */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container mt-5">
              {/* <img
                className="img-fluid d-block"
                src="img/Timage.jpg"
                alt="Temam Hashim"
              /> */}
              {video && (
                <video className="bg-video" autoPlay loop muted>
                  <source
                    src={require("../../public/img/video.mp4")}
                    type="video/mp4"
                  />
                  <source
                    src={require("../../public/img/video.mp4")}
                    type="video/ogg"
                  />
                </video>
              )}
              {/* {leftImg && ( */}
              <img
                className="img-fluid d-block"
                src={`${leftImgSrc ? leftImgSrc : "img/Timage.jpg"}`}
                alt=""
              />
              {/* )} */}
            </div>
            <p className="d-block d-md-none">
              {`I'm`} experienced software developer, versatile blogger, and
              skilled freelancer with a passion for crafting high-quality
              content. Proven expertise in developing innovative software
              solutions, delivering captivating blog articles, and providing
              top-notch freelance services. Exceptional writing skills combined
              with a deep understanding of technology and industry trends.
              Committed to delivering excellence, meeting deadlines, and
              exceeding client expectations. Seeking opportunities to leverage
              my diverse skill set and contribute to impactful projects.
            </p>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              {/* Text Rotator Starts */}
              {video && (
                <video className="bg-video" autoPlay loop muted>
                  <source
                    src={require("../../public/img/video.mp4")}
                    type="video/mp4"
                  />
                  <source
                    src={require("../../public/img/video.mp4")}
                    type="video/ogg"
                  />
                </video>
              )}
            </div>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="main-text w-100" id="selector">
                <h3>Hi there !</h3>
                <AnimationText />
                <p>
                  {`I'm`} experienced software developer, versatile blogger, and
                  skilled freelancer with a passion for crafting high-quality
                  content. Proven expertise in developing innovative software
                  solutions, delivering captivating blog articles, and providing
                  top-notch freelance services. Exceptional writing skills
                  combined with a deep understanding of technology and industry
                  trends. Committed to delivering excellence, meeting deadlines,
                  and exceeding client expectations. Seeking opportunities to
                  leverage my diverse skill set and contribute to impactful
                  projects.
                </p>
                <div className="call-to-actions-home mt-5">
                  <div className="text-left">
                    <a
                      href="#about"
                      onClick={() => changeNav("about")}
                      className="btn link-portfolio-one"
                    >
                      <span>
                        <i className="fa fa-user" />
                        more about me
                      </span>
                    </a>
                    <a
                      href="#work"
                      onClick={() => changeNav("work")}
                      className="btn btn-secondary link-portfolio-two"
                    >
                      <span>
                        <i className="fa fa-suitcase" />
                        portfolio
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Text Rotator Ends*/}
            </div>
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
    </section>
  );
};
export default Home;
