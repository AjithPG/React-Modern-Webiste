import React from 'react'
import {Navbar}  from './components';
import styles from './style';

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <Navbar/>
      </div>
    </div>
  )
}

export default App