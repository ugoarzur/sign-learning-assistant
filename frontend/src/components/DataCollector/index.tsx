import { useState } from 'react'
import { useHandLandmarks } from '../../hooks/useHandLandmarks'

export function DataCollector() {
  const [samples, setSamples] = useState<number[][]>([])
  const [label, setLabel] = useState('bonjour')
  const videoRef = useHandLandmarks((landmark) => {
    setSamples((prev) => [...prev, landmark])
  })

  const exportSamples = () => {
    const blob = new Blob([JSON.stringify({ label, data: samples })], {
      type: 'application/json',
    })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.download = `${label}.json`
    a.href = url
    a.click()
  }

  return (
    <div>
      <video ref={videoRef} className="w-64 h-48" autoPlay muted />
      <input value={label} onChange={(e) => setLabel(e.target.value)} />
      <button onClick={exportSamples}>Export</button>
    </div>
  )
}
