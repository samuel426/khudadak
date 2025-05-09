import { useState } from "react";
import "./App.css";
import ResultScreen from "./ResultScreen";
import { Slide } from "./Slide";
import Detail from "./Detail";

function App() {
  const [currentScreen, setCurrentScreen] = useState("slide"); 
  const [top3Crops, setTop3Crops] = useState([]);

  return (
    <div className="App">
      {currentScreen === "slide" && (
        <Slide onResultClick={() => setCurrentScreen("result")}
        onResult={(crops) => setTop3Crops(crops)} /> // Slide에서 상태 변경
      )}
      {currentScreen === "result" && (
        <ResultScreen onResultClick={() => setCurrentScreen("Detail")} crops={top3Crops} />
      )}
      {currentScreen === "Detail" && (
        <Detail onResultClick={() => setCurrentScreen("slide")} crops={top3Crops}
         />
      )}

    </div>
  );
}

export default App;
