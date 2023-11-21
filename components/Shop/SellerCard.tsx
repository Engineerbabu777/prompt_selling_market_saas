import Ratings from '@/utils/Ratings'
import { styles } from '@/utils/styles'
import { Card, Avatar } from '@nextui-org/react'

type Props = {
  loading: Boolean
}
export default function SellerCard ({ loading }: Props) {
  return (
    <>
      <Card className='py-4 bg-[#100d21] m-3 w-full md:w-[31%] 2xl:w-[23%] flex flex-col items-center text-white border border-[#ffffff22]'>
        <Avatar
          src={
            'https://lh3.googleusercontent.com/-_NKuepDPf3c/AAAAAAAAAAI/AAAAAAAAAAA/AFNEGgLXvpmcITtFpWK03AZ5jxMqMU2lgQ/photo.jpg?sz=46'
          }
          className='w-[80px] h-[80px]'
        />
         <span className={`${styles.label} py-2 text-xl`}>@{"RajuBhai"}</span>
         <div className="flex items-center">
            <span className={`${styles.label} pr-2`}>{"4"}/5</span>
            <Ratings rating={5} />
          </div>
          <span className={`${styles.label} py-2`}>
            Total Sales: {"3"}
          </span>
      </Card>
    </>
  )
}
