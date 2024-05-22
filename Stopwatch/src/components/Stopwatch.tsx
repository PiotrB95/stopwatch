export const Stopwatch = () => {
  const date = new Date()
  return (
    <>
      <div>Stopwatch {date.toLocaleTimeString()}</div>
    </>
  )
}
