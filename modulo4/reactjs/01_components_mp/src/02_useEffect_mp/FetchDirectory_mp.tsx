import { useState, useEffect } from 'react'

interface Professional {
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

export default function FetchDirectory_mp() {
  const [professionals,   setProfessionals]   = useState<Professional[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error,   setError]   = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchDirectory() {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`)

        const data: Professional[] = await res.json()

        if (!cancelled) setProfessionals(data)
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Error desconocido')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchDirectory()

    return () => { cancelled = true }
  }, [])

  return (
    <div style={{ maxWidth: 360 }}>
      {loading && (
        <p style={{ color: '#6b7280', fontSize: 14 }}>Cargando directorio...</p>
      )}
      {error && (
        <p style={{ color: '#991b1b', fontSize: 14 }}>Error: {error}</p>
      )}
      {professionals && !loading && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {professionals.map((pro) => (
            <div key={pro.id} style={{ padding: 14, border: '1px solid #e5e7eb', borderRadius: 8 }}>
              <p style={{ margin: '0 0 4px', fontWeight: 600 }}>Lic. {pro.name}</p>
              <p style={{ margin: '0 0 4px', fontSize: 13, color: '#6b7280' }}>
                Contacto: {pro.email}
              </p>
              <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
                Clínica / Organización: {pro.company.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
