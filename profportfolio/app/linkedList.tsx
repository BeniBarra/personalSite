import React from 'react'
import Link from 'next/link';
import linkData from '../public/assets/json/links.json';

const linkedList = () => {
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

  return (
    <div>linkedList</div>
  )
}

export default linkedList