import styles from './Button.module.css'

function getButtonClasses(props) {
  const {
    variant,
    size,
    disabled,
  } = props

  return [
    styles['button'],
    styles[variant],
    styles[size],
    disabled && styles.disabled,
  ].filter(Boolean).join(' ')
}

export function Button(props) {
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