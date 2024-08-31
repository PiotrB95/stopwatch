import './Button.css'

interface Props {
  label: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  clasName?: string
  disabled?: boolean
}

export const Button = (props: Props) => {
  const { onClick, clasName, label, type, disabled } = props
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`button ${clasName}`}
    >
      {label}
    </button>
  )
}
