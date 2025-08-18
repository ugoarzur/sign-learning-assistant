import * as tf from '@tensorflow/tfjs'
import { useEffect, useState } from 'react'

export function useGestureClassifier() {
  const [model, setModel] = useState<tf.LayersModel>()
  const [prediction, setPrediction] = useState<string>('')

  const labels = ['bonjour', 'merci', 'oui', 'non'] // same order as training

  useEffect(() => {
    tf.loadLayersModel('/models/sign-model/model.json').then(setModel)
  }, [])

  const classify = async (landmarks: number[]) => {
    if (!model) return
    const input = tf.tensor2d([landmarks])
    const predictionTensor = model.predict(input) as tf.Tensor
    const data = await predictionTensor.data()
    const index = data.indexOf(Math.max(...data))
    setPrediction(labels[index])
  }

  return { classify, prediction }
}
