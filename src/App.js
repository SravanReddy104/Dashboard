import Partner from "./Views/Parntner";

import "./styles.css";

import Services from "./Views/Services";
import Student from "./Views/Student";
import FeedBack from "./Views/Feedback";
import Contact from "./Views/Contact";
import Startup from "./Views/Startup";

export default function App() {
  return (
    <div className="App">
      <Startup />
      <Partner />
      <Services />
      <Student />
      <FeedBack />
      <Contact />
    </div>
  );
}
