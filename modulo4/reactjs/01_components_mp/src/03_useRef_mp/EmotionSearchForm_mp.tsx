import { useRef, useEffect } from 'react'

export default function EmotionSearchForm_mp() {
  const sentimientoRef = useRef<HTMLInputElement>(null)
  const intensidadRef = useRef<HTMLInputElement>(null)
  const desencadenanteRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    sentimientoRef.current?.focus()
  }, [])

  function handleSentimientoKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault()
      intensidadRef.current?.focus()
    }
  }

  function handleIntensidadKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault()
      desencadenanteRef.current?.focus()
    }
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 300 }}>
      <input
        ref={sentimientoRef}
        placeholder="Sentimiento (ej. Tristeza)"
        onKeyDown={handleSentimientoKeyDown}
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <input
        ref={intensidadRef}
        type="number"
        min="0"
        max="10"
        placeholder="Intensidad (0-10)"
        onKeyDown={handleIntensidadKeyDown}
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <input
        ref={desencadenanteRef}
        placeholder="Desencadenante"
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <button
        type="submit"
        style={{ padding: '8px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
      >
        Registrar Emoción
      </button>
    </form>
  )
}
