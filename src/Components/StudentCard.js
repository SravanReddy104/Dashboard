import "../studentcard.css";
const StudentCard = ({ profile, name, flag, uni }) => {
  return (
    <div className="studentcard">
      <div className="studentbody">
        <img className="profile" src={profile} alt="profile" />
        <div className="studentdetails">
          <p>{name}</p>
          <div className="location">
            <img src={`${flag}`} alt="country" className="studentflag" />
            <p className="university">{uni}</p>
          </div>
          <p>Peiora, Illnois</p>
        </div>
      </div>
    </div>
  );
};
export default StudentCard;
