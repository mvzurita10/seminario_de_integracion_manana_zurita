import React from 'react'

interface Technique {
  nombre: string
  dificultad: string
  tiempoMinutos: number
}

interface TechniqueListProps {
  techniques: Technique[]
  title?: string
}

export default function TechniqueList_mp({ techniques, title = 'Técnicas de Relajación' }: TechniqueListProps) {
  if (techniques.length === 0) {
    return <p style={{ color: '#999' }}>No hay técnicas disponibles.</p>
  }

  return (
    <div>
      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {techniques.map((tech) => (
          <li
            key={tech.nombre}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: '1px solid #eee',
            }}
          >
            <span>{tech.nombre} ({tech.dificultad})</span>
            <span style={{ color: '#888', fontSize: 13 }}>{tech.tiempoMinutos} min</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
