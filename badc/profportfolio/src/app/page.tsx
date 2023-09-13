import Image from 'next/image'
import Profile from './profile'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Lets just slam pow an image in here real quick.</h1>
        {Profile()}
        {/* {Projects()} */}
    </main>
  )
}
