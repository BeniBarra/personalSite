import React from 'react'
import Image from 'next/image'

const profile = () => {
  return (
    <>
        <Image src='/assets/pics/headshot.jpg' alt='me' width={200} height={400}></Image>
        <h1>Ben Arno</h1>
        <p>Please read this there's some really good information here I'm sure.</p>
        <a href=''></a>
        {/* TODO: Automate the downloading of resume as a pdf */}
        {/* TODO: Make this point to that resume */}
    </>
  )
}

export default profile