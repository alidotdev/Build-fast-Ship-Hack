import CanvasDraw from "react-canvas-draw";
import APTIMI_logo from "../assets/aptimi_logo.png"


const NotesBoard = () => {
  return (
    <div>
        <div style={{backgroundColor: '#3A3939'}}>
            <img src={APTIMI_logo} width={200} />
        </div>
        <div style={{backgroundColor: '#3A3939', height: '80vh' }} className="flex items-center" >
      <CanvasDraw 
      canvasWidth= {'100%'}
      canvasHeight= {'100%'}
      />
        </div>
    </div>
  )
}

export default NotesBoard
