'use client'

import { Divider } from '@nextui-org/react'
import Header from '@/components/Header'
import Hero from '@/components/Route/Hero'
import Image from 'next/image'
import About from '@/components/Route/About'
import { styles } from '@/utils/styles'
import PromptCard from '@/components/Prompt/PromptCard'
import BestSellers from '@/components/Shop/BestSellers'
import Future from '@/components/Route/Future'
import Partners from '@/components/Route/Partners'
import SellersBanner from '@/components/Shop/SellersBanner'
import Footer from '@/components/Layout/Footer'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Page ({}) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get('/api/routes/me')
      .then(data => {
        setLoading(false)
        setUser(data.data)
        console.log({ data })
      })
      .catch(err => {
        setLoading(false)

        console.log({ err })
      })
  }, [])

  return (
    <>
      {loading ? (
        <></>
      ) : (
        <>
          <div>
            <div className='banner'>
              {/* HEADER */}
              <Header activeItem={0} user={user} />
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
                <Partners />
                <SellersBanner />
                <br />
                <br />
                <Divider className='bg-[#ffffff23]' />
                <Footer />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
