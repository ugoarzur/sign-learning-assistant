import './App.css'
import { useGestureClassifier } from './hooks/useGestureClassifier'
import { useHandLandmarks } from './hooks/useHandLandmarks'

function App() {
  const { classify, prediction } = useGestureClassifier()
  const videoRef = useHandLandmarks(classify)
  return (
    <>
      <div className="container">
        <h1>Sign Language Recognition</h1>
        <video ref={videoRef} className="rounded-lg w-1/2" autoPlay muted />
        <div className="text-2xl p-4">{prediction || 'Do a sign...'}</div>
      </div>
    </>
  )
}

export default App
