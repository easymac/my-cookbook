'use client'
import { useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { SiteTitle } from '@/components/global/SiteTitle'
import { Button } from '@/components/ui/Button'
import { HiArrowLongLeft } from 'react-icons/hi2'
import { useMobilePanelContext } from '@/app/MobilePanelContext'
import styles from '@/components/global/Header.module.css'

export function SiteTitleOrBackButton() {
  const { isOpen, setIsOpen } = useMobilePanelContext()
  const isMobile = useMediaQuery({ maxWidth: 768 })

  const handleBack = () => {
    setIsOpen(false)
    if (!isMobile) {
      window.history.back()
    }
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

  return !isOpen ? <SiteTitle /> : <>{backButton}</>
}