'use client'
import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { SiteTitle } from '@/components/global/SiteTitle'
import { Button } from '@/components/ui/Button'
import { HiArrowLongLeft } from 'react-icons/hi2'
import styles from '@/components/global/Header.module.css'

const usePreviousRoute = () => {
  const pathname = usePathname()
  const ref = useRef<string | null>(null)

  useEffect(() => {
    ref.current = pathname
  }, [pathname])

  return ref.current
}

export function SiteTitleOrBackButton() {
  const pathname = usePathname()
  const priorPathname = usePreviousRoute()
  let showLogo = true;

  if (
    pathname
    && pathname.startsWith('/recipes/')
    && priorPathname
    && !priorPathname.startsWith('/recipes/')
  ) {
    showLogo = false;
  }

  const handleBack = () => {
    window.history.back()
  }

  const backButton = (
    <Button
      onClick={handleBack}
      variant="tertiary"
      className={styles['back-button']}
    >
      <HiArrowLongLeft />
    </Button>
  )

  return showLogo ? <SiteTitle /> : <>{backButton}</>
}