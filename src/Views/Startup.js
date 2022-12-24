import "../startup.css";
import brand from "../../public/Assests/brand.jpg";

import flag from "../../public/Assests/fla.jpg";

import wings from "../../public/Assests/wings.png";

import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";

import { FaFlagUsa } from "react-icons/fa";

const Startup = () => {
  return (
    <div className="startcontainer">
      <div className="startleft">
        <div className="startnav">
          <img src={`${brand}`} alt="brand" className="startbrand" />
          <p>Home</p>
          <p>About Us</p>
          <p>Migrate</p>
          <p>Services</p>
          <p>Contact Us</p>
        </div>
        <div className="quotation">
          <div>
            <p className="big">Let your</p>
            <p className="startbold">dream take</p>
          </div>
          <div className="logo">
            <img src={`${wings}`} alt="logo" className="logo" />
          </div>
        </div>
      </div>
      <div className="middle">
        <div className="chosecountry">
          {/* <img src={flag} alt="country" className="starticon" /> */}
          <FaFlagUsa style={{ color: "lightblue" }} />

          <input className="startinput" placeholder="choose Country" />
          <AiOutlineDown style={{ color: "black" }} />
        </div>
        <p className="divider"></p>
        <div className="chosedegree">
          <input
            type="text"
            className="startinput"
            placeholder="choose your degree"
          />
          <AiOutlineDown style={{ color: "black" }} />
        </div>
        <p className="divider"></p>
        <div className="chosearea">
          <input className="startinput" placeholder="Area of study" />
          <AiOutlineDown style={{ color: "black" }} />
        </div>
        <div className="chosecourse">
          <input className="startinput" placeholder="choose your Course" />
          <AiOutlineDown style={{ color: "black" }} />
        </div>
      </div>
      <div className="startright">
        <div className="starticons">
          {/* <img src={`${love}`} className="starticon love" alt="love" /> */}
          <AiOutlineHeart style={{ color: "black" }} />

          {/* <img src={`${user}`} className="starticon user" alt="user" /> */}
          <AiOutlineUser style={{ color: "black" }} />
        </div>
        <div className="poster">
          {/* <img src={`${person}`} alt="poster" className="poster" /> */}
        </div>
      </div>
    </div>
  );
};
export default Startup;
