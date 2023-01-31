'use client'
import { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  children: ReactNode,
  href: string,
  [key: string]: any,
}

export function NavLink(
  { children, href, ...props }: Props
) {
  const pathname = usePathname()
  return (
    <Link href={href} {...props} data-active={pathname === href}>
      {children}
    </Link>
  )
}