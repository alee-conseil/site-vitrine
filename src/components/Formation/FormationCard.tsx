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
                  bg-white gap-6 py-5 px-6 
                  rounded-xl border shadow-formation-unhover xm:hover:shadow-formation-hover
                  transition ease-in-out duration-100 hover:duration-300 
                  xm:hover:scale-105 hover:z-50 
                  max-w-[270px] fold:max-w-[320px]"
      href={"/formations/" + formation_id}
    >
      <div className="flex flex-col justify-start items-center gap-3 w-full">
        <div className="flex justify-between items-end w-full">
          <Image className='w-16 fold:w-[75px] lg:w-16 lg2:w-[75px] h-16 fold:h-[75px] lg:h-16 lg2:h-[75px]' src={image_url} width={75} height={75} alt='testing' />
          <h5 className={montserratFont.className + " text-2xl fold:text-3xl lg:text-2xl lg2:text-3xl text-ac-violet text-left font-medium w-min"}>{title}</h5>
        </div>

        <div className="bg-ac-violet h-0.5 w-full"></div>
        <p className={latoFont.className + " text-black text-base text-center font-medium line-clamp-2"}>
          {hero}
        </p>
      </div>
      <div className="flex flex-col justify-start items-stretch gap-3 w-full">
        <div className="flex justify-start items-center gap-6 w-full">
          <Image src="/Formations/coin.png" width={50} height={50} alt='Prix' />
          <p className={montserratFont.className + " font-medium text-black text-lg text-left"}>{price + " " + currency} HT / personne</p>
        </div>

        <div className="flex justify-start items-center gap-6 w-full">
          <Image src="/Formations/hourglass.png" width={50} height={50} alt='Durée' />
          <p className={montserratFont.className + " font-medium text-black text-lg text-left"}>{Math.ceil(duration / dailyHours)} jours ({duration} heures)</p>
        </div>

        <div className="flex justify-center items-center">
          <p className={montserratFont.className + " font-medium text-base text-center text-[#5C8BFC] underline"}>Voir plus</p>
        </div>
      </div>
    </Link>
  )
}