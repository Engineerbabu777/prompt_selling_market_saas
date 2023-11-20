'use client'

import { styles } from '@/utils/styles'
import { Button, Chip } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function About ({}) {
  const router = useRouter()

  return (
    <>
      <div className='w-full relative grid md:grid-cols-2 md:py-8'>
        <div className='col-span-1 w-full md:w-[60%] md:mt-5 px-5 md:px-[unset]'>
          <Chip
            className={`text-[18px] p-5 font-[600] font-Inter rounded-[8px] text-white mb-[30px] h-[37px] bg-[#12221f]`}
          >
            Ai Image
          </Chip>
          <h5 className={`${styles.heading} mb-5 !leading-[50px]`}>
            Crafting Tomorrow&apos;s Images With Artificial Intelligence
          </h5>
          <p className={`${styles.paragraph} pb-5`}>
            AI image generation tools have emerged as powerful resources in the
            realm of digital art and design. These cutting-edge tools leverage
            advanced.
          </p>
          <Button
            className={`${styles.button} bg-[#2551b0] font-[500] h-[45px]`}
            onClick={() => router.push('/marketplace')}
          >
            Visit Shop
          </Button>
        </div>

        <div className='col-span-1 my-10 md:mt-[unset]'>
          <Image
            src={'https://neural.love/cdn/ai-photostock/1ee87a4c-4f3a-6a94-beee-8d5e4973d01c/0.jpg?Expires=1704067199&Signature=JQzto0TB8S7HL~jeMprUFf329bCEWU0GQY2yOFQxjEbu-Id3UtA-3rCqaDJ9rBm0gKBdIuOX1vEwx97nR-p~xiHBr5cB7--OaThc59wLEeuy29vptbidTcwPXjt1qBo1suoTPSsXvU7xZ6U4kYG1hr73Ihp2AIrLAQ5dWD8frVG8sx~H1XQF-cZ6EpgInJx-XD99oVbMBIjP8VvJe-syUFxGJ23zehdVjSeoXmx7J2ZnAPXncksw8eHlwTJcKLMkVi~Rgl6rEStJjuJjoUy2Uf~UbWVnR3Lhw4ydIijKee45Il8l-FsoJ~7KtxW4Er7R5Z-h2QdF4~CX~GGyLHsN-Q__&Key-Pair-Id=K2RFTOXRBNSROX'}
            alt=''
            width={600}
            height={600}
            priority
          />
        </div>
      </div>
    </>
  )
}
