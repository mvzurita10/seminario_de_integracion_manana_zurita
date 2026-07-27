import { useRef, useState } from 'react'

export default function MoodNotesEditor_mp() {
  const pensamientoRef = useRef<HTMLInputElement>(null)
  const intensidadRef = useRef<HTMLInputElement>(null)
  const [saved, setSaved] = useState('Sin notas privadas guardadas')

  function handleSave() {
    const pensamiento = pensamientoRef.current?.value.trim() ?? ''
    const intensidad = intensidadRef.current?.value.trim() ?? ''

    const text1 = pensamiento === '' ? '(vacío)' : pensamiento
    const text2 = intensidad === '' ? '(vacío)' : intensidad

    setSaved(`Pensamiento: ${text1} | Intensidad: ${text2}`)
  }

  function handleClear() {
    if (pensamientoRef.current) pensamientoRef.current.value = ''
    if (intensidadRef.current) intensidadRef.current.value = ''
    pensamientoRef.current?.focus()
  }

  return (
    <div style={{ maxWidth: 340, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <p style={{ margin: 0, color: '#6b7280', fontSize: 13 }}>
        Nota Guardada: <strong style={{ color: '#111827' }}>{saved}</strong>
      </p>

      <input
        ref={pensamientoRef}
        defaultValue=""
        placeholder="Escribe un pensamiento privado..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <input
        ref={intensidadRef}
        defaultValue=""
        placeholder="Intensidad sentida (0-10)..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={handleSave}
          style={{ flex: 1, padding: '8px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Guardar Nota
        </button>
        <button
          onClick={handleClear}
          style={{ padding: '8px 16px', background: '#f3f4f6', color: '#6b7280', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Limpiar
        </button>
      </div>
    </div>
  )
}
