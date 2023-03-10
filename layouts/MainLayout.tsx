import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SectionContainer from '../components/SectionContainer'
import ScrollTopAndComment from '../components/ScrollTopAndComment'
 

interface Props {
  children: ReactNode
  slug: string
}

export default function MainLayout({ children,slug }: Props) {
  console.log(slug)
  const variants = {
    hidden: { opacity: 0, x: -200 },
    enter: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0 },
  }

  return (
 
    <SectionContainer>
      <Header />
      <div className="flex flex-col justify-between h-screen">
        <motion.main
          className="mb-auto"
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: 'linear' }}
        >
          {children}
        </motion.main>
        <Footer />

      </div>
      <ScrollTopAndComment slug={slug} />
    </SectionContainer>

  )
}
