import React from 'react'

import styles from '../styles/Global'

const Button = ({ assetUrl, link }) => {
  return (
    <div
      className={styles.btnBlack}
      onClick={() => {
        window.open(link, '_blank')
      }}
    >
      <img src={assetUrl} alt="expo_icon"
        className={styles.btnIcon}
      />
      <div className="flex ml-4 flex-col justify-start ">
        <p className={`${styles.btnText} font-normal text-xs`}>View it on</p>
        <p className={`${styles.btnText} font-bold text-s`}>Expo Store</p>
      </div>
    </div>
  )
}

export default Button