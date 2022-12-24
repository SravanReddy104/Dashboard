import "./Card.css";

const Images = ({ p1 }) => {
  return (
    <div className="images">
      <img className="image" src={p1} alt="person" />
    </div>
  );
};
export default Images;
