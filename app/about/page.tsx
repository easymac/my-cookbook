import Link from 'next/link'
import CONFIG from '@/cookbook.config'
import packageJson from '@/package.json'

export default async function About() {
  return (
    <main>
      <h1>About {CONFIG.siteTitle}</h1>
      <h2>{CONFIG.siteDescription}</h2>
      <p>
        Running <Link href="https://github.com/easymac/my-cookbook">My Cookbook</Link> version {packageJson.version}
      </p>
    </main>
  )
}