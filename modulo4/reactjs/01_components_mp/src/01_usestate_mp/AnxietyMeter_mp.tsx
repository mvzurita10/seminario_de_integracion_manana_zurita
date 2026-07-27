import { useState } from 'react'

interface AnxietyMeter {
  initialValue?: number
  step?: number
  label?: string
}

export default function AnxietyMeter_mp({
  initialValue = 0,
  step = 10,
  label = 'Nivel de Ansiedad',
}: AnxietyMeter) {
  const [level, setLevel] = useState(initialValue)

  function increase() {
    setLevel(level + step > 100 ? 100 : level + step)
  }

  function decrease() {
    setLevel(level - step < 0 ? 0 : level - step)
  }

  function reset() {
    setLevel(initialValue)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{ fontSize: 14, color: '#666' }}>{label}</span>
      <button onClick={decrease} style={btnStyle}>−</button>
      <span style={{ fontSize: 20, fontWeight: 600, minWidth: 40, textAlign: 'center' }}>
        {level}
      </span>
      <button onClick={increase} style={btnStyle}>+</button>
      <button onClick={reset} style={{ ...btnStyle, fontSize: 12, color: '#999' }}>
        Reset
      </button>
    </div>
  )
}

const btnStyle = {
  width: 32,
  height: 32,
  borderRadius: 6,
  border: '1px solid #ddd',
  background: '#f5f5f5',
  cursor: 'pointer',
  fontSize: 16,
}
