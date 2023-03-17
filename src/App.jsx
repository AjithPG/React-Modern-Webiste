import React from "react";
import { Navbar, Hero } from "./components";
import Billing from "./components/Billing";
import Business from "./components/Business";
import CardDetails from "./components/CardDetails";
import Stats from "./components/Stats";
import styles from "./style";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <Navbar />
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
       
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
         <Stats/>
         <Business/>
         <Billing/>
         <CardDetails/>
      </div>
      </div>
      
     </div>
  );
};

export default App;
