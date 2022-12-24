import p1 from "../../public/Assests/p1.jpg";
import FeedbackCard from "../Components/FeedbackCard";
import "../feedback.css";
const FeedBack = () => {
  return (
    <div className="feddbackcontainer">
      <p className="title">
        What our <span className="bold">Students Say</span>
      </p>
      <div className="feedbackcards">
        <FeedbackCard
          profile={p1}
          name="Purnima"
          university="University of the Pacific"
          country="USA"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        />
        <FeedbackCard
          profile={p1}
          name="Purnima"
          university="University of the Pacific"
          country="USA"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
        />
      </div>
    </div>
  );
};
export default FeedBack;
