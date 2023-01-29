export function Button(props) {
  const {
    onClick,
    children,
    ...rest
  } = props

  return (
    <button
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}