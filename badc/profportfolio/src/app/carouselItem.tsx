import Image from 'next/image'
import projData from '../../public/assets/json/links.json';
// Initialization for ES Users
import {
  Carousel,
  // initTE,
} from "tw-elements";

// initTE({ Carousel });


export default function carouselItem() {
  return(
    <Carousel>

      <Image
      src=''
      alt=''
      width={1}
      height={1}
      />
      {/* <h2>Project Name</h2>
      <ul>
      <li></li>
      TODO: Figure out how to conveniently store project information. Database seems overkill. csv?
    </ul> */}
    </Carousel>
  );
}