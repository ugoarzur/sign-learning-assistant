var video = document.querySelector('.video-container')

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      if (video === null) {
        throw new Error('oops')
      }
      video.srcObject = stream
    })
    .catch(function (err0r) {
      console.log('Something went wrong!')
    })
}

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then(function (stream: MediaStream): void {
    const webcam = document.getElementById('webcamVideo')
    console.log({ webcam, stream })
  })
  .catch(function (err) {
    console.error('Something went wrong!', err)
  })
