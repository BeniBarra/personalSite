import Image from 'next/image'

export default function carouselItem() {
  return(
    <>
      <h2>Project Name</h2>
      <Image
        src=''
        alt=''
        width={1}
        height={1}
      />
      <ul>
        <li></li>
        {/* TODO: Figure out how to conveniently store project information. Database seems overkill. csv? */}
      </ul>
    </>
  );
}