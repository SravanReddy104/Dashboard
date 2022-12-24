import "../feedback.css";

const FeedbackCard = ({ desc, name, university, country, profile }) => {
  return (
    <div className="feedbackcard">
      <div className="desc">
        <p>{desc}</p>
      </div>
      <div className="studinfo">
        <img src={`${profile}`} alt="profile" className="profile" />
        <div className="personinfo">
          <p className="bold">{name}</p>
          <p className="gray">{university}</p>
          <p className="gray">{country}</p>
        </div>
      </div>
    </div>
  );
};
export default FeedbackCard;
