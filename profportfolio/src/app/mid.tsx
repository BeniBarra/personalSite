'use client'
import { initTE, Carousel } from 'tw-elements';
import Projects from "./projects";
import { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function Mid({ pageProps }: AppProps) {
  useEffect(() => {
    const use = async () => {
      (await import('tw-elements')).default;
    };
    use();
  }, []);
  return (
    <>
      {Projects(pageProps)}
    </>
)}