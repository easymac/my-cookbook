'use client'
import { NavLink } from '@/components/ui/NavLink'
import { FaUtensils } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiStopwatch } from 'react-icons/bi'
import { ChefHat } from '@icon-park/react'
import styles from './MobileNav.module.css'

export function MobileNav() {
  return (
    <div className={styles['mobile-nav-wrapper']}>
      <div className={styles['mobile-nav']}>
        <NavLink href="/">
          <div className={styles['link-icon']}>
            <ChefHat theme="outline" size="24" fill="#333"/>
          </div>
          <div className={styles['link-text']}>Recipes</div>
        </NavLink>
        <NavLink href="/favorites">
          <div className={styles['link-icon']}>
            <AiOutlineHeart />
          </div>
          <div className={styles['link-text']}>Favorites</div>
        </NavLink>
        <NavLink href="/recently-viewed">
          <div className={styles['link-icon']}>
            <BiStopwatch />
          </div>
          <div className={styles['link-text']}>Recently viewed</div>
        </NavLink>
      </div>
    </div>
  )
}