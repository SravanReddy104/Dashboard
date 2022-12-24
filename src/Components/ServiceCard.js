import "../service.css";
import { CiWallet } from "react-icons/ci";

const ServiceCard = ({ title, desc }) => {
  return (
    <div className="servicecontainer">
      <div className="top">
        <CiWallet className="icon" />
      </div>
      <p className="title">{title}</p>
      <p className="desc">{desc}</p>
      <div className="button">
        <button className="btn">Use Service</button>
        <p className="next">&gt;</p>
      </div>
    </div>
  );
};
export default ServiceCard;
