import React from 'react'
import styles from './loadingStyle.module.css'
const Loading1 = () => {
  return (
    /* From Uiverse.io by alexruix */ 
<div className={`${styles["loader"]}`}>
  <div className={`${styles["cell"]} ${styles['d-0']}`}></div>
  <div className={`${styles["cell"]} ${styles['d-1']}`}></div>
  <div className={`${styles["cell"]} ${styles['d-2']}`}></div>

  <div className={`${styles["cell"]} ${styles['d-1']}`}></div>
  <div className={`${styles["cell"]} ${styles['d-2']}`}></div>
  
  
  <div className={`${styles["cell"]} ${styles['d-2']}`}></div>
  <div className={`${styles["cell"]} ${styles['d-3']}`}></div>
  
  
  <div className={`${styles["cell"]} ${styles['d-3']}`}></div>
  <div className={`${styles["cell"]} ${styles['d-']}`}></div>
  
  
</div>
  )
}

export default Loading1