import "../Card.css";
import { BsFillChatLeftTextFill } from "react-icons/bs";

import Images from "./Images";
import p1 from "../../public/Assests/p1.jpg";
import p2 from "../../public/Assests/p2.jpg";
import p3 from "../../public/Assests/p3.jpg";
import m from "../../public/Assests/m.jpg";

const Card = ({ flag, name, fee, num, gre }) => {
  return (
    <div className="card">
      <div className="header">
        <img className="flag" src={flag} alt="flag" />
        <p className="title">Peiora, Illonis</p>
      </div>
      <div className="body">
        <img src={name} alt="name" className="brand" />
        <div className="details">
          <div className="info">
            <h5>Starting Fee</h5>
            <p className="gray">{fee}</p>
          </div>
          <div className="divider" />
          <div className="info">
            <h5>ILETS</h5>
            <p className="gray">{num}</p>
          </div>
          <div className="divider" />

          <div className="info">
            <h5>GRE</h5>
            <p className="gray">{gre}</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <Images p1={p1} />
        <Images p1={p2} />
        <Images p1={p3} />
        <div className="imageinfo">
          <p>50+</p>
          <p>Students</p>
        </div>
        <div className="message">
          <div>
            <p>Chat with</p>
            <p> Alumini</p>
          </div>
          <BsFillChatLeftTextFill style={{ color: "black" }} className="msg" />
        </div>
      </div>
    </div>
  );
};
export default Card;
