import { useState } from 'react'

interface CheckIn {
  nombre: string
  fecha: string
  emocionPrincipal: string
  nivelAnimoScale: number
}

export default function MoodCheckInForm_mp() {
  const [checkIn, setCheckIn] = useState<CheckIn>({
    nombre: '',
    fecha: '',
    emocionPrincipal: '',
    nivelAnimoScale: 5,
  })

  function handleChange(field: keyof CheckIn, value: string | number) {
    setCheckIn((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 320 }}>
      <input
        placeholder="Nombre"
        value={checkIn.nombre}
        onChange={(e) => handleChange('nombre', e.target.value)}
        style={inputStyle}
      />
      <input
        type="date"
        placeholder="Fecha"
        value={checkIn.fecha}
        onChange={(e) => handleChange('fecha', e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Emoción Principal"
        value={checkIn.emocionPrincipal}
        onChange={(e) => handleChange('emocionPrincipal', e.target.value)}
        style={inputStyle}
      />
      <input
        placeholder="Nivel de Ánimo (0-10)"
        type="number"
        min="0"
        max="10"
        value={checkIn.nivelAnimoScale}
        onChange={(e) => handleChange('nivelAnimoScale', Number(e.target.value))}
        style={inputStyle}
      />

      <div style={{ marginTop: 8, padding: 12, background: '#f5f5f5', borderRadius: 6 }}>
        <p style={{ margin: 0, fontSize: 13 }}>
          <strong>{checkIn.nombre || '—'}</strong> · {checkIn.fecha || '—'} · {checkIn.emocionPrincipal || '—'} · Ánimo: {checkIn.nivelAnimoScale}
        </p>
      </div>
    </form>
  )
}

const inputStyle = {
  padding: '8px 12px',
  border: '1px solid #ddd',
  borderRadius: 6,
  fontSize: 14,
}
