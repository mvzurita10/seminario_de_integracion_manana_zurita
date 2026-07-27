import { useState } from 'react'

export default function MoodLogCounter_mp() {
  const [logs, setLogs] = useState(0)

  function addLog() {
    setLogs((prev) => prev + 1)
  }

  function addThreeLogs() {
    setLogs((prev) => prev + 1)
    setLogs((prev) => prev + 1)
    setLogs((prev) => prev + 1)
  }

  return (
    <div>
      <p>Bitácoras registradas: {logs}</p>
      <button onClick={addLog}>+1 Bitácora</button>
      <button onClick={addThreeLogs}>+3 Bitácoras</button>
    </div>
  )
}
