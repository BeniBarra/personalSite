'use client'
import { initTE, Carousel } from 'tw-elements';
import Projects from "./projects";
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import projData from '../../public/assets/json/projects.json'

// export default function Mid() {
//   useEffect(() => {
//     const use = async() => {
//       (await import('tw-elements')).default;
//     };
//     use();
//   }, []);
//   return(
//     <>
//       {Projects()}
//     </>
//   )
// }

export default function Mid() {
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);
  return (
    <>
       {Projects(projData.projects)}
     </>
)}