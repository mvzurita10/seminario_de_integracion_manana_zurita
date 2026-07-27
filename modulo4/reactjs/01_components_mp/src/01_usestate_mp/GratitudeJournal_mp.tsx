import { useState } from 'react'

interface JournalEntry {
  id: number
  pensamientoGratitud: string
  actividadRealizada: string
  done: boolean
}

export default function GratitudeJournal_mp() {
  const [entries, setEntries] = useState<JournalEntry[]>([])
  const [gratitud, setGratitud] = useState('')
  const [actividad, setActividad] = useState('')

  function addEntry() {
    if (!gratitud.trim() || !actividad.trim()) return
    setEntries((prev) => [
      ...prev,
      { id: Date.now(), pensamientoGratitud: gratitud.trim(), actividadRealizada: actividad.trim(), done: false },
    ])
    setGratitud('')
    setActividad('')
  }

  function removeEntry(id: number) {
    setEntries((prev) => prev.filter((entry) => entry.id !== id))
  }

  function toggleEntry(id: number) {
    setEntries((prev) =>
      prev.map((entry) =>
        entry.id === id ? { ...entry, done: !entry.done } : entry
      )
    )
  }

  return (
    <div style={{ maxWidth: 450 }}>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input
          value={gratitud}
          onChange={(e) => setGratitud(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addEntry()}
          placeholder="Pensamiento de gratitud..."
          style={{ flex: 1, padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd' }}
        />
        <input
          value={actividad}
          onChange={(e) => setActividad(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addEntry()}
          placeholder="Actividad realizada..."
          style={{ flex: 1, padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd' }}
        />
        <button
          onClick={addEntry}
          style={{ padding: '8px 16px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Agregar
        </button>
      </div>

      {entries.length === 0 && (
        <p style={{ color: '#999', fontSize: 14 }}>No hay registros en el diario.</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {entries.map((entry) => (
          <li
            key={entry.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <input
              type="checkbox"
              checked={entry.done}
              onChange={() => toggleEntry(entry.id)}
            />
            <div style={{ flex: 1, textDecoration: entry.done ? 'line-through' : 'none', color: entry.done ? '#aaa' : '#333' }}>
              <strong>{entry.pensamientoGratitud}</strong>
              <div style={{ fontSize: 12 }}>{entry.actividadRealizada}</div>
            </div>
            <button
              onClick={() => removeEntry(entry.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#e00', fontSize: 16 }}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {entries.length > 0 && (
        <p style={{ fontSize: 13, color: '#888', marginTop: 8 }}>
          {entries.filter((e) => e.done).length} de {entries.length} objetivos completados
        </p>
      )}
    </div>
  )
}
