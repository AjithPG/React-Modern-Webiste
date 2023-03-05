import React from 'react'
import { arrowup } from '../assets';
import styles from "../style";
const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full p-[2px] cursor-pointer bg-blue-gradient`}>
     <div className={`bg-primary w-full h-full rounded-full ${styles.flexCenter} flex-col`}>
        <div className={`${styles.flexCenter} flex-row`}>
             <p className='font-poppins font-medium text-[18px]'>
             <span className='text-gradient'>Get</span> 
             </p>
            <img src={arrowup} alt="arrow-up" className='w-[18px] h-[18px] object-contain ml-2'/>
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Started</span>
      </p>
     </div>
    </div>
  )
}

export default GetStarted