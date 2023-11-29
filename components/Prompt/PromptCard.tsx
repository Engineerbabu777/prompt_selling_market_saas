'use client'

import { getShopById } from '@/actions/shop/getShopById'
import Ratings from '@/utils/Ratings'
import { styles } from '@/utils/styles'
import { Card, Divider, Avatar } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type Props = {
  prompts: any
}
export default function PromptCard ({ prompts }: Props) {
  const [shopData, setShopData] = useState<any>(null)

  console.log("hello")
  console.log({prompts})

  const getShopInfo = async () => {
    console.log(1)
    const data = await getShopById({ shopId: prompts?.sellerId })
    console.log({data});
    setShopData(data)
  }
  useEffect(() => {
    if (prompts?.sellerId) {
      getShopInfo()
    }
  }, [prompts?.sellerId])



  return (
    <>
      <Card
        radius='lg'
        className='w-full md:w-[31%] 2xl:w-[23%] max-h-[410px] p-4 bg-[#130f23] m-3'
      >
        <div className='relative'>
          <Image
            src={prompts?.images[0]?.url}
            alt=''
            className='w-full !max-h-[200px] object-cover'
            width={300}
            height={300}
          />
          <div className='absolute bottom-2 left-2'>
            <div
              className='w-max bg-black hover:bg-[#16252] duration-300 transition-opacity hover:text-black 
            text-white p-[10px] items-center flex rounded-xl'
            >
              <Image
                src='https://pixner.net/aikeu/assets/images/category/chat.png'
                width={25}
                height={25}
                alt=''
              />
              <span
                className={`text-[16px] font-Inter font-[500] pl-2 text-white`}
              >
                {prompts?.category}
              </span>
            </div>
          </div>
        </div>

        <div className='w-full flex justify-between py-2'>
          <h3 className={` font-Inter font-[500] text-[18px] text-white`}>
            {prompts?.name}
          </h3>
          <p className={`text-[18px] font-[400] text-[#b1b0b6] font-Inter `}>
            ${prompts?.price}
          </p>
        </div>

        <Divider className='bg-[#ffffff18] my-3' />

        <div className='w-full flex items-center justify-between'>
          <div className='flex items-center'>
            <Avatar
              src={
               shopData?.avatar || 'https://lh3.googleusercontent.com/-_NKuepDPf3c/AAAAAAAAAAI/AAAAAAAAAAA/AFNEGgLXvpmcITtFpWK03AZ5jxMqMU2lgQ/photo.jpg?sz=46'
              }
            />
            <span
              className={`text-[16px] text-[#b1b0b6] font-Inter font-[500] pl-3`}
            >
              @{shopData?.name}
            </span>
          </div>
          <Ratings rating={prompts?.rating} />
        </div>
        <br />
        <Link href={`/prompt/${prompts?.id}`} className='w-full'>
          <div
            className={`text-[18px] p-5 font-Inter rounded-[8px] !py-2 !px-3 text-center mb-3 w-full text-white bg-transparent border border-[#16c252] hover:bg-[#16c252] hover:text-black duration-300 transition-opacity font-Inter font-[600]`}
          >
            Get Prompts
          </div>
        </Link>
      </Card>
    </>
  )
}
