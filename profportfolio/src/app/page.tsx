import Image from 'next/image'
import Profile from './profile'
import linksList from './linksList'
import carouselItem from './carouselItem'
import Projects from './projects'
import {
  Carousel,
  initTE,
} from "tw-elements";
// initTE({ Carousel });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-3xl font-bold underline">Lets just slam pow an image in here real quick.</h1>
        {Profile()}
        {linksList()}
        {carouselItem()}
        {Projects()}
    </main>
  )
}
