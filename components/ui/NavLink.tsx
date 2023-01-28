'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function NavLink({ children, href, ...props }) {
  const pathname = usePathname()
  return (
    <Link href={href} {...props} data-active={pathname === href}>
      {children}
    </Link>
  )
}