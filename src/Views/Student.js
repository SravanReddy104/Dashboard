import StudentCard from "../Components/StudentCard";
import p1 from "../../public/Assests/p1.jpg";
import flag from "../../public/Assests/fla.jpg";

const Student = () => {
  return (
    <div className="studentcontainer">
      <p className="title">
        Meet Our <span className="bold">Student Ambassadors</span>
      </p>
      <div className="studentcards">
        <StudentCard
          profile={p1}
          name="Purnima"
          flag={flag}
          uni="University of Dayton"
        />
        <StudentCard
          profile={p1}
          name="Purnima"
          flag={flag}
          uni="University of Dayton"
        />
        <StudentCard
          profile={p1}
          name="Purnima"
          flag={flag}
          uni="University of Dayton"
        />
        <StudentCard
          profile={p1}
          name="Purnima"
          flag={flag}
          uni="University of Dayton"
        />
      </div>
    </div>
  );
};
export default Student;
