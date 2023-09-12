import Image from 'next/image'

export default function Profile() {
  return(
    <Image
      src='/assets/headshot.jpg'
      alt='me'
      width={200}
      height={400}
    />
  )
}