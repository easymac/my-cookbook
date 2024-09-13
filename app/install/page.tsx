import Image from 'next/image'
import { RxShare2 } from 'react-icons/rx'
import { HiArrowLongDown } from 'react-icons/hi2'
import styles from './Install.module.css'
import iphonePic from '@/public/images/iphone-small.png'


export default function Page() {
  return (
    <main className={styles['main']}>
      <header className={styles['header']}>
        <h1>How to install this app on your iPhone</h1>
        <img
          className={styles['step-image']}
          src={iphonePic.src}
          alt="iPhone"
        />
      </header>
      <div className={styles['steps']}>
        <div className={styles['step']}>
          <h2>Tap the <RxShare2 /> icon</h2>
          <img
            className={styles['step-image']}
            src="/images/iphone-share.png"
            alt="Share icon"
            width={300}
            height={300}
          />
        </div>
        <div className={styles['step']}>
          <h2>Add to Home Screen</h2>
          <img
            className={styles['step-image']}
            src="/images/iphone-add-to-home-screen.png"
            alt="Add to Home Screen"
            width={300}
            height={300}
          />
        </div>
      </div>
      <div className={styles['start-here']}>
        <h3>Start here</h3>
        <HiArrowLongDown />
      </div>
    </main>
  )
}