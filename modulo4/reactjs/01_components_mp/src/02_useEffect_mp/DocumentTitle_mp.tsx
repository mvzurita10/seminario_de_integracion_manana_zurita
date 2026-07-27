import { useEffect } from 'react'

export default function DocumentTitle_mp() {
  useEffect(() => {
    document.title = 'MindBalance - Estado de Ánimo Diario'

    return () => {
      document.title = 'React App'
    }
  }, [])

  return (
    <p style={{ fontSize: 14, color: '#6b7280' }}>
      El título de la pestaña cambió al montar este componente.
    </p>
  )
}
