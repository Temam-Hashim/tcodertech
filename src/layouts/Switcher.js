import { Fragment, useContext, useState } from "react";
import ColorContext from "../context/colorContext";

const colors = [
  { name: "blue", colorImg: "blue" },
  { name: "red", colorImg: "red" },
  { name: "yellow", colorImg: "yellow" },
  { name: "yellowgreen", colorImg: "yellowgreen" },
  { name: "green", colorImg: "green" },
  { name: "orange", colorImg: "orange" },
  { name: "green", colorImg: "green" },
  { name: "magenta", colorImg: "magenta" },
  { name: "goldrenrod", colorImg: "#daa520" },
  { name: "cyan", colorImg: "cyan" },
  { name: "darkred", colorImg: "#800000" },
  { name: "darkgreen", colorImg: "#006400" },
  { name: "darkteal", colorImg: "#008080" },
  { name: "darkburgundy", colorImg: "#800020" },
];

const Switcher = () => {
  const { changeColor } = useContext(ColorContext);
  const [toggle, setToggle] = useState(false);
  return (
    <Fragment>
      {/* Live Style Switcher Starts - demo only */}
      <div
        id="switcher"
        className=""
        style={{ display: toggle ? "block" : "none" }}
      >
        <div className="content-switcher">
          <h4>STYLE SWITCHER</h4>
          <ul>
            {colors.map((color, i) => (
              <li key={i}>
                <a
                  href="#"
                  title={color.name}
                  className="color"
                  key={i}
                  onClick={() => changeColor(color.name)}
                >
                  {/* <img src={color.colorImg} alt={color.name} /> */}
                  <div
                    style={{
                      backgroundColor: `${color.colorImg}`,
                      width: "26px",
                      height: "20px",
                    }}
                  ></div>
                </a>
              </li>
            ))}
          </ul>
          <br />
          {/* <a
            href=""
            className="waves-effect waves-light btn font-weight-600 purchase hoverable"
          >
            {" "}
            <span>
              <i className="fa fa-shopping-cart" /> PURCHASE
            </span>
          </a> */}
          <div id="hideSwitcher" onClick={() => setToggle(false)}>
            ×
          </div>
        </div>
      </div>
      <div
        id="showSwitcher"
        className="styleSecondColor"
        onClick={() => setToggle(true)}
        style={{ display: toggle ? "none" : "block" }}
      >
        <i className="fa fa-cog fa-spin" />
      </div>
      {/* Live Style Switcher Ends - demo only */}
    </Fragment>
  );
};
export default Switcher;
