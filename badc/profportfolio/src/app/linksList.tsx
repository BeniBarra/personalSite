import { link } from "fs";
import Link from "next/link";

export default function linksList() {
  
  let adrses = [
    {
      link: 'https://www.linkedin.com/in/ben-arno/',
      name: 'LinkedIn'
    },
    {
      link: 'https://github.com/Barnord',
      name: 'GitHub'
    }];
  let linkList: any[] = [];
  adrses.forEach(adrs => {
    linkList.push(<li><a href={adrs.link}>{adrs.name}</a></li>)
  })

  return(
    <>
      <ul>
        {linkList}
      </ul>
    </>
  );
}