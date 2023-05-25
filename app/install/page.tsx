import Image from 'next/image'
import { RxShare2 } from 'react-icons/rx'
import styles from './Install.module.css'


export default function Page() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>How to install this app on your iPhone</h1>
        <Image
          src="/images/iphone-small.png"
          alt="iPhone"
          width={300}
          height={300}
          quality={100}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={true}
        />
      </header>
      <div className={styles.steps}>
        <div className={styles.step}>
          <h2>Tap the <RxShare2 /> icon</h2>
          <Image
            src="/images/iphone-share.png"
            alt="Share icon"
            width={300}
            height={300}
            quality={100}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={true}
          />
        </div>
        <div className={styles.step}>
          <h2>Add to Home Screen</h2>
          <Image
            src="/images/iphone-add-to-home-screen.png"
            alt="Add to Home Screen"
            width={300}
            height={300}
            quality={100}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={true}
          />
        </div>
      </div>
      <div className={styles['start-here']}>
        <h3>Start here</h3>
      </div>
    </main>
  )
}