const NumberInput = ({
  id,
  icon,
  label,
  onChangeHandler,
  onInputHandler,
  min,
  errorState,
  value
}: {
  id: string
  icon: any
  label: string
  onChangeHandler: any
  onInputHandler: any
  min: number
  errorState: any
  value?: string
}) => {
  return (
    <div className='vflex input-cont'>
      <label htmlFor={id}>
        {icon}
        {label}
      </label>
      <input
        onChange={onChangeHandler}
        onInput={onInputHandler}
        type='number'
        inputMode='numeric'
        min={min}
        id={id}
        value={value}
      />
      <div>{errorState}</div>
    </div>
  )
}
export default NumberInput
