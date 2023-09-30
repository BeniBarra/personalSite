import useEffect from 'react'
import { Carousel, initTE } from "tw-elements"
import projData from '../../public/assets/json/projects.json';
import carouselItem from "./carouselItem";

export default function Projects() {
  // useEffect(() => {
    // const init = async () => {
      // const { Datepicker, Input, initTE } = await import("tw-elements");
      // initTE({ Datepicker, Input });
    // };
    // init();
    initTE({Carousel})
  // }, []);
  return (
    <Carousel>
      { projData.projects.forEach(proj => {
        {carouselItem(proj)}
      })}
    </Carousel>
  );
};

// export default Projects;

// export default function Projects() {
//   return(
//     <>
//       <h2>Here there be projects.</h2>
//       <p>And a carousel. Eventually.</p>
//     </>
//   )
// }