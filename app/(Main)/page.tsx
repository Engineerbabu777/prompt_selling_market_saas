'use client'

import Header from '@/components/Header'
import Hero from '@/components/Route/Hero'
import Image from 'next/image'
import About from '@/components/Route/About'
import { styles } from '@/utils/styles'
import PromptCard from '@/components/Prompt/PromptCard'
import BestSellers from '@/components/Shop/BestSellers'
import Future from '@/components/Route/Future'

export default function Page ({}) {
  return (
    <>
      <div>
        <div className='banner'>
          {/* HEADER */}
          <Header activeItem={0} />
          <Hero />
        </div>

        {/* <Image
          src={"https://pixner.net/aikeu/assets/images/footer/shape-two.png"}
          width={120}
          height={120}
          alt="images"
          className="absolute right-[-30px]"
        /> */}

        <br />

        <div className='w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto '>
          <About />
          <div className=''>
            <h1 className={`${styles.heading} p-2 font-Montserrat`}>
              Latest Prompts
            </h1>

            <div className='flex flex-wrap'>
              <PromptCard />
              <PromptCard />
              <PromptCard />
              <PromptCard />
              <PromptCard />
            </div>

            <br />

            <BestSellers />
            <Future />
          </div>
        </div>
      </div>
    </>
  )
}
