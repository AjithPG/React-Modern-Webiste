import React from "react";
import { disocunt } from "../assets";
import styles from "../style";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row item-center px-4 py-[6px] mb-2 rounded-[10px] bg-discount-gradient">
          <img src={disocunt} alt="disocunt" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-content items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white">
            The Next 
            <br className="sm:hiiden block"/>{" "}
            <span className="text-gradient">Generation</span>
           
          </h1>

          <div className="sm:flex hiddden md:mr-4 mr-0">
            <GetStarted/>
          </div>
        
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white">Payment</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
    </section>
  );
};

export default Hero;
