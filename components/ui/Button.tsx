import styles from './Button.module.css'

interface ButtonProps {
  variant?: 'accent' | 'primary' | 'secondary' | 'tertiary'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  onClick: () => void
  children: React.ReactNode
  className?: string
}

function getButtonClasses(props: ButtonProps) {
  const {
    variant,
    size,
    disabled,
  } = props

  return [
    styles['button'],
    styles[variant || 'default'],
    styles[size || 'default'],
    disabled && styles.disabled,
  ]
    .filter(Boolean)
    .join(' ')
}

export function Button(props: ButtonProps) {
  const {
    onClick,
    children,
    className,
    ...rest
  } = props

  return (
    <button
      className={`${className} ${getButtonClasses(props)}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}