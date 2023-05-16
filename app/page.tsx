import AboutHeader from '@/components/AboutHeader'
import Header from '@/components/Header'
import HomeText from '@/components/HomeText'
import Mission from '@/components/Mission'
import NavBar from '@/components/NavBar'
import TeamImage from '@/components/TeamImage'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <TeamImage />
      <AboutHeader />
      <Mission />

    </>
  )
}
