import React from 'react'
import styles from './ImageContainer.module.css'

export default function ImageContainer({img , width, height}) {
  return (
    <div className={styles.imgContainer} style={{width:width , height:height}}>
        <img src={img}/>
    </div>
  )
}
