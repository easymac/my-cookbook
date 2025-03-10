import CONFIG from '@/cookbook.config'
import styles from './Logo.module.css'

export function Logo() {
  const character =
    CONFIG.logoCharacter ||
    Array.from(CONFIG.siteTitle)[0] ||
    ''
  const coverColor = CONFIG.themeColor
  return (
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 199.23 134.95">
      <defs>
        <style>
          {`.cover { fill: ${coverColor}; }`}
        </style>
      </defs>
      <g>
        <path className={styles['pages']} d="M100.82,99.33L20.68,60.1c-3.5-1.71-7.58.83-7.58,4.73v9.23c0,2.32,1.32,4.44,3.41,5.46l84.31,41.27c1.69.83,3.66.83,5.35,0l84.32-41.28c.16-.08.33-.14.49-.21v-21.5l-84.81,41.52c-1.69.83-3.66.83-5.35,0Z"/>
        <path className={styles['edges']} d="M195.83,79.51c-1.53-.75-3.28-.81-4.85-.21-.17.06-.33.13-.49.21l-84.32,41.28c-1.69.83-3.66.83-5.35,0L16.51,79.52c-2.08-1.02-3.41-3.14-3.41-5.46v-9.23c0-3.89,4.08-6.44,7.58-4.73l80.13,39.23c1.69.83,3.66.83,5.35,0l84.81-41.52,4.85-2.38c4.54-2.22,4.54-8.7,0-10.92L106.16.62c-1.69-.83-3.66-.83-5.35,0L3.41,48.31c-2.08,1.02-3.41,3.14-3.41,5.46v27.42c0,2.32,1.32,4.44,3.41,5.46l97.41,47.69c1.69.83,3.66.83,5.35,0l89.66-43.89c4.54-2.22,4.54-8.7,0-10.92Z"/>
      </g>
      <path className="cover" d="M101.18,85.65L32.47,51.41c-2.31-1.15-2.31-4.44,0-5.59L101.42,11.57c1.47-.73,3.21-.73,4.68,0l68.71,34.24c2.31,1.15,2.31,4.44,0,5.59l-68.95,34.25c-1.47.73-3.21.73-4.68,0Z"/>
      <text 
        className={styles['logo-text']} 
        x="66%" 
        y="-5%" 
        dominantBaseline="middle" 
        textAnchor="middle" 
        fontSize="70"
        style={{
          transform: 'perspective(400px) rotateX(55deg) rotateZ(45deg)'
        }}
      >
        {character}
      </text>
    </svg>
  );
}