import Link from 'next/link'
import CONFIG from '@/cookbook.config'
import packageJson from '@/package.json'
import styles from './about.module.css'
import { Button } from '@/components/ui/Button'

export default async function About() {
  return (
    <div className={styles['main-wrapper']}>
      <main className={styles['about']}>
        <div className={styles['site-about']}>
          <h1>About {CONFIG.siteTitle}</h1>
          <p>{CONFIG.siteDescription}</p>
        </div>
        <div className={styles['platform-about']}>
          <p>
            Running <Link href="https://github.com/easymac/my-cookbook">
            My Cookbook</Link> version {packageJson.version}, a self-hosted
            PWA for storing, sharing, and using your recipes.
          </p>
          <Button
            variant="tertiary"
            size="large"
            href="https://github.com/easymac/my-cookbook"
          >
            Make your own
          </Button>
        </div>
      </main>
    </div>
  )
}