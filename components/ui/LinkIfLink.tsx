import { ReactNode } from 'react'
import Link from 'next/link'

type Props = {
  children: ReactNode
}

export function LinkIfLink(
  { children }: Props
) {
  // If the child is not a string, it's not a link:
  if (typeof children !== 'string') return <>{children}</>

  // If the child is a string, it might be a link:
  const href = children

  // If the child is not a valid URL, it's not a link:
  try {
    new URL(href)
  }
  catch {
    return <>{children}</>
  }

  // If the child is a valid URL, it's a link:
  return (
    <Link href={href}>{children}</Link>
  )
}