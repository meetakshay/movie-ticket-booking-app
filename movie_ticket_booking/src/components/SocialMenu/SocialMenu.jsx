import React from 'react'
import facebook from '../../assets/facebook.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import twitter from '../../assets/twitter.svg'

const SocialMenu = () => {
  return (
    <>
     <div data-aos='slide-right' data-aos-duration='500' data-aos-delay='1200' className=" fixed top-[35%] hidden md:block z-10  ">
        <div className=" relative shadow-2xl flex flex-col gap-5 justify-center items-center py-4 rounded-r-[40%]  bg-blue-500  w-[35px] h-[180px] hover:bg-green-400 ">
            <div className="flex items-center justify-center gap-1 group ">
                <img className='relative   h-[40px] md:h-[20px] hover:scale-150 duration-200 ease-out cursor-pointer' src={facebook} alt="Facebook" />
                <p className='-z-10 absolute -translate-x-[130px]   group-hover:translate-x-[60px] duration-500 ease-in-out font-semibold italic text-red-600 '>Facebook</p>
            </div>
            <div className="flex items-center justify-center gap-1 group ">
                <img className=' relative  h-[40px] md:h-[20px] hover:scale-150 duration-200 ease-out cursor-pointer' src={whatsapp} alt="whatsapp" />
                <p className=' -z-10 absolute -translate-x-[130px]   group-hover:translate-x-[60px] duration-500 ease-in-out font-semibold italic text-red-600  '>Whatsapp</p>

            </div>
            <div className="flex items-center justify-center gap-1 group ">
                <img className=' relative  h-[40px] md:h-[20px] hover:scale-150 duration-200 ease-out cursor-pointer' src={telegram} alt="whatsapp" />
                <p className=' -z-10 absolute -translate-x-[130px]   group-hover:translate-x-[60px] duration-500 ease-in-out font-semibold italic text-red-600 '>Telegram</p>
            </div>
            <div className="flex items-center justify-center gap-1 group ">
                <img className=' relative  h-[40px] md:h-[20px] hover:scale-150 duration-200 ease-out cursor-pointer' src={twitter} alt="whatsapp" />
                <p className=' -z-10 absolute -translate-x-[130px]   group-hover:translate-x-[60px] duration-500 ease-in-out font-semibold italic text-red-600 '>Twitter</p>
            </div>
           
        </div>
     </div> 
    </>
  )
}

export default SocialMenu
