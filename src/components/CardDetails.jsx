import React from 'react'
import Button from './Button'
import {Card} from '../assets'
import styles from '../style'
import { layout } from '../style'

const CardDetails = () => {
  return (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h1 className={styles.heading2}>
            Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
            </h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>
            <Button styles={'mt-10'}/>
        </div>
        <div className={layout.sectionImg}>
            <img src={Card} alt="card details" className='w-[100%] h-[100%]'/>
        </div>
    </section>
  )
}

export default CardDetails