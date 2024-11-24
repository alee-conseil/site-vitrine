import { currency, dailyHours } from '@/utils/constants';

import { Lato, Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  formation_id: string,
  title: string,
  hero: string,
  description: string,
  image_url: string,
  price: number,
  duration: number
}

const montserratFont = Montserrat({ subsets: ["latin"] });
const latoFont = Lato({ weight: "400", subsets: ["latin"] });

export default function FormationCard({ formation_id, title, hero, image_url, price, duration }: Props) {
  return (
    <Link className="
                  flex flex-col justify-between items-center w-full
                  bg-white py-5 px-6 
                  rounded-xl border shadow-formation-unhover xm:hover:shadow-formation-hover
                  transition ease-in-out duration-100 hover:duration-300 
                  xm:hover:scale-105 hover:z-50 
                  max-w-[270px] fold:max-w-[320px]"
      href={"/formations/" + formation_id}
    >
      <div className="
                  flex flex-col justify-between items-center w-full
                  gap-6
                  transition ease-in-out duration-100 hover:duration-300"
      >
        <div
          className="flex flex-col justify-start items-center gap-3 w-full"
        >
          <div className="flex justify-between items-center w-full">
            <Image
              className='w-16 fold:w-[75px] lg:w-16 lg2:w-[75px] h-16 fold:h-[75px] lg:h-16 lg2:h-[75px]'
              src={image_url}
              width={75}
              height={75}
              alt={title} />
            <h1 className={montserratFont.className + " text-2xl fold:text-3xl lg:text-2xl lg2:text-3xl text-purple-600 text-left font-medium w-min"}>
              {title}
            </h1>
          </div>
          <div className="bg-purple-600 h-0.5 w-full"></div>
          <h2 className={latoFont.className + " text-black text-base text-center font-medium line-clamp-2"}>
            {hero}
          </h2>
        </div>
        <div className="flex flex-col justify-start items-stretch gap-3 w-full">
          <div className="flex justify-start items-center gap-6 w-full">
            <Image src="/Formations/coin.png" width={50} height={50} alt='Prix' />
            <p className={montserratFont.className + " font-medium text-black text-lg text-left"}>
              <span>{price}</span> <span>{currency}</span> HT / personne
            </p>
          </div>
          <div className="flex justify-start items-center gap-6 w-full">
            <Image src="/Formations/hourglass.png" width={50} height={50} alt='Durée' />
            <p className={montserratFont.className + " font-medium text-black text-lg text-left"}><span>{Math.ceil(duration / dailyHours)}</span> jours (<span>{duration}</span> heures)</p>
          </div>
          <div className="flex justify-center items-center">
            <p className={montserratFont.className + " font-medium text-base text-center text-[#5C8BFC] underline"}>Voir plus</p>
          </div>
        </div>
      </div>
    </Link>
  )
}