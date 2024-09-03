import './style.css'
import './webcam'

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then(function (stream) {
    const webcam = document.getElementById('webcamVideo')
  })
  .catch(function (err) {
    console.error('Something went wrong!', err)
  })
