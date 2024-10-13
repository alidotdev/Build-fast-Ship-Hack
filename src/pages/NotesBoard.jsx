import CanvasDraw from "react-canvas-draw";
import APTIMI_logo from "../assets/aptimi_logo.png";
import Toolbox from "../components/Toolbox";
import { useState } from "react";
const NotesBoard = () => {
  const [canvasOptions, setCanvasOptions] = useState(
    { 
      canvasWidth: 1960,
      brushRadius: 30
    }
  );
  return (
    <div>
      <div style={{ backgroundColor: "#3A3939" }}>
        <img src={APTIMI_logo} width={200} />
      </div>

      <div>
        <Toolbox setCanvasOptions={setCanvasOptions} canvasOptions={canvasOptions} />
      </div>
      <div
        style={{ backgroundColor: "#3A3939", height: "80vh" }}
        className="flex items-center"
      >
        <CanvasDraw
          canvasWidth={1690 }
          brushRadius = {canvasOptions.brushRadius}
          //  canvasWidth={"100%"}
          //  canvasHeight={"100%"}
        />
      </div>
    </div>
  );
};

export default NotesBoard;
