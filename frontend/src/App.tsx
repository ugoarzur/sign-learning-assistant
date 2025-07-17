import './App.css'

function App() {
  return (
    <>
      <div className="container">
        <h1>Sign Language Recognition</h1>
        
        <video
          autoPlay={true}
          id="webcamVideo"
          className="video-container"
        ></video>
        <canvas
          className="output_canvas"
          id="output_canvas"
          width="1280"
          height="720"
        ></canvas>
        <div id="gesture_output" className="output">
          output here
        </div>
      </div>
    </>
  )
}

export default App
