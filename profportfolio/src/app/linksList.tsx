import Link from "next/link";
import linkData from '../../public/assets/json/links.json';
import { JsonSourceFile } from "typescript";

export default function linksList() {
// TODO: figure out what datatype will let me make the json an argument.
  let adrses = linkData.adrses
  let linkList: any[] = [];

  adrses.forEach(adrs => {
      linkList.push(
        <li>
          <Link href={adrs.link} target='_blank'>
            {adrs.name}
          </Link>
        </li>
      )

    if (adrs.xtra != null) {
      let xtraLinkList: any[] = [];

      adrs.xtra.forEach(xtra =>
        xtraLinkList.push(
          <li>
            <Link href={xtra.link} target='_blank'>
              {xtra.name}
            </Link>
          </li>
        ));
      
      linkList.push(<ul>{xtraLinkList}</ul>)
      }
    })

  return(
    <>
      <ul>
        {linkList}
      </ul>
    </>
  );
}

