import Card from "../Components/Card";
import flag from "../../public/Assests/fla.jpg";
import brand from "../../public/Assests/brand.jpg";

const Partner = () => {
  return (
    <div className="container">
      <p className="title">
        Parntered <span className="bold">Universites</span>
      </p>
      <div className="cards">
        <Card flag={flag} name={brand} fee="$12000" num="4.0" gre="200" />
        <Card flag={flag} name={brand} fee="$12000" num="4.0" gre="200" />
        <Card flag={flag} name={brand} fee="$12000" num="4.0" gre="200" />
        <Card flag={flag} name={brand} fee="$12000" num="4.0" gre="200" />
      </div>
    </div>
  );
};
export default Partner;
