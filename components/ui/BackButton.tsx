'use client'
import { useTransitionRouter } from 'next-view-transitions'
import { Button } from '@/components/ui/Button'
import { HiArrowLongLeft } from 'react-icons/hi2'

export function BackButton() {
  const router = useTransitionRouter()

  return (
    <Button
      onClick={() => router.back()}
      variant="tertiary"
    >
      <HiArrowLongLeft />
    </Button>
  )
}