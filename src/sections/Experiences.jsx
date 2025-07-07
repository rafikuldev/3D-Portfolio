// import { Timeline } from "../components/Timeline";
// import { experiences } from "../constants";
// const Experiences = () => {
//   return (
//     <div className="w-full">
//       <Timeline data={experiences} />
//     </div>
//   );
// };

// export default Experiences;
import { Timeline } from '../components/Timeline';
import { experiences } from '../constants';

const Experiences = () => {
  return (
    <section
      id="experiences"
      className="c-space section-spacing scroll-mt-24 w-full"
    >
      <Timeline data={experiences} />
    </section>
  );
};

export default Experiences;
