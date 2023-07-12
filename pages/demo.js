import Head from "next/head";
import { Fragment, useEffect } from "react";
import Link from "next/link";
const Demo = () => {
  useEffect(() => {
    document.querySelector("body").style.overflow = "auto";
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Temam - Choose your demo</title>
        <link href="demo/assets/css/bootstrap.min.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="demo/assets/images/favicon.png" />
        <link
          href="demo/assets/css/style.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <section className="banner text-center">
        <div className="content">
          <h1>Temam Hashim</h1>
          <h2>Tcoder Tech</h2>
        </div>
      </section>
      <section className="demo dark">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="content">
                <div className="bg_container">
                  <Link
                    href="/"
                    className="img_container"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="demo/assets/images/index-dark.jpg"
                      alt=""
                      className="img-responsive screenshot"
                    />
                  </Link>
                </div>
                <h2>FULLSCREEN DARK</h2>
                <div className="anchor">
                  <h6>
                    <Link
                      href="/"
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      view demo
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="content">
                <div className="bg_container">
                  <Link
                    href="/index-image-overlay"
                    className="img_container"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="demo/assets/images/index-image-overlay.jpg"
                      alt=""
                      className="img-responsive screenshot"
                    />
                  </Link>
                </div>
                <h2>FULLSCREEN IMAGE OVERLAY</h2>
                <div className="anchor">
                  <h6>
                    <Link
                      href="/index-image-overlay"
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      view demo
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="content">
                <div className="bg_container">
                  <Link
                    href="/index-video-dark"
                    className="img_container"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="demo/assets/images/video-dark.jpg"
                      alt=""
                      className="img-responsive screenshot"
                    />
                  </Link>
                </div>
                <h2>BACKGROUND VIDEO DARK</h2>
                <div className="anchor">
                  <h6>
                    <Link
                      href="/index-left-image-dark"
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      view demo
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="content">
                <div className="bg_container">
                  <Link
                    href="/index-video-light"
                    className="img_container"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="demo/assets/images/video-light.jpg"
                      alt=""
                      className="img-responsive screenshot"
                    />
                  </Link>
                </div>
                <h2>BACKGROUND VIDEO LIGHT</h2>
                <div className="anchor">
                  <h6>
                    <Link
                      href="/index-left-image-light"
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      view demo
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="content">
                <div className="bg_container">
                  <Link
                    href="/index-left-image-dark"
                    className="img_container"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="demo/assets/images/imageleft-dark.jpg"
                      alt=""
                      className="img-responsive screenshot"
                    />
                  </Link>
                </div>
                <h2>BACKGROUND IMAGE DARK</h2>
                <div className="anchor">
                  <h6>
                    <Link
                      href="/index-left-image-dark"
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      view demo
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="content">
                <div className="bg_container">
                  <Link
                    href="/index-left-image-light"
                    className="img_container"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="demo/assets/images/imageleft-light.jpg"
                      alt=""
                      className="img-responsive screenshot"
                    />
                  </Link>
                </div>
                <h2>BACKGROUND IMAGE LIGHT</h2>
                <div className="anchor">
                  <h6>
                    <Link
                      href="/index-left-image-light"
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      view demo
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <p className="text-center">
              7 Color Skins Available Via Style Switcher
            </p>
          </div>
        </div>
      </section>
      <footer>
        <div className="text-center footer_copyright">
          <h6>Temam Hashim</h6>
          <h5>
            Designed with <span className="heart">❤</span> by{" "}
            <a target="_blank" rel="noreferrer" href="#">
              Temam Hashim
            </a>
          </h5>
        </div>
      </footer>
    </Fragment>
  );
};
export default Demo;
