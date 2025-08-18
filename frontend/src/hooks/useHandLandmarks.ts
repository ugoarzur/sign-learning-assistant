import { useEffect, useRef } from 'react'
import { Hands } from '@mediapipe/hands'
import { Camera } from '@mediapipe/camera_utils'

export function useHandLandmarks(onLandmarks: (landmarks: number[]) => void) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!videoRef.current) return

    const hands = new Hands({
      locateFile: (file) =>
        `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`,
    })

    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.8,
      minTrackingConfidence: 0.8,
    })

    hands.onResults((results) => {
      if (results.multiHandLandmarks.length > 0) {
        const landmarks = results.multiHandLandmarks[0].flatMap((p) => [
          p.x,
          p.y,
          p.z,
        ]) // 63 floats
        onLandmarks(landmarks)
      }
    })

    const camera = new Camera(videoRef.current, {
      onFrame: async () => {
        await hands.send({ image: videoRef.current! })
      },
      width: 640,
      height: 480,
    })

    camera.start()
  }, [])

  return videoRef
}
