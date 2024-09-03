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
