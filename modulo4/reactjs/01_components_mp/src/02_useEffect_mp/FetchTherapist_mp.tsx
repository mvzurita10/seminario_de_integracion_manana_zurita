import { useState, useEffect } from 'react'

interface Therapist {
  id:       number
  name:     string
  email:    string
  username: string
  company:  Company
}
interface Company {
  name:     string
  catchPhrase:    string
  bs: string
}

export default function FetchTherapist_mp() {
  const [therapistId,  setTherapistId]  = useState(1)
  const [therapist,    setTherapist]    = useState<Therapist | null>(null)
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchTherapist() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${therapistId}`
        )
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`)

        const data: Therapist = await res.json()

        if (!cancelled) setTherapist(data)
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Error desconocido')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchTherapist()

    return () => { cancelled = true }
  }, [therapistId])

  return (
    <div style={{ maxWidth: 360 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        {[1, 2, 3].map((id) => (
          <button
            key={id}
            onClick={() => setTherapistId(id)}
            style={{
              padding: '6px 14px',
              borderRadius: 6,
              border: '1px solid #d1d5db',
              background: therapistId === id ? '#0070f3' : '#fff',
              color:      therapistId === id ? '#fff'    : '#333',
              cursor: 'pointer',
              fontWeight: therapistId === id ? 600 : 400,
            }}
          >
            Terapeuta {id}
          </button>
        ))}
      </div>

      {loading && (
        <p style={{ color: '#6b7280', fontSize: 14 }}>Cargando terapeuta...</p>
      )}
      {error && (
        <p style={{ color: '#991b1b', fontSize: 14 }}>Error: {error}</p>
      )}
      {therapist && !loading && (
        <div style={{ padding: 14, border: '1px solid #e5e7eb', borderRadius: 8 }}>
          <p style={{ margin: '0 0 4px', fontWeight: 600 }}>Terapeuta: {therapist.name}</p>
          <p style={{ margin: '0 0 4px', fontSize: 13, color: '#6b7280' }}>
            @{therapist.username} - Especialista de Apoyo
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            Contacto: {therapist.email}
          </p>
          <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
            Centro: {therapist.company.name}
          </p>
        </div>
      )}
    </div>
  )
}
