import logo from "./logo.svg";
import "./App.css";
import { BubbleChart } from "./components/bubbleChart";

const height = 250;
const width = 600;
const padding = 20;
const yStep = 50;
const xStep = 100;

function App() {
  return (
    <div className="App">
      <BubbleChart
        height={height}
        width={width}
        padding={padding}
        yStep={yStep}
        xStep={xStep}
      />
    </div>
  );
}

export default App;
