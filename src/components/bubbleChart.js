import React, { useEffect, useState } from "react";
import { XAxisLabels, YAxisLabels } from "./chartLabels";
import "../styles/styles.css";

const Axis = ({ points }) => {
  return (
    <polyline fill="none" stroke="#ccc" strokeWidth=".5" points={points} />
  );
};

const XAxis = ({ height, width, padding }) => (
  <Axis
    points={`${padding}, ${height - padding}, ${width - padding}, ${
      height - padding
    } `}
  />
);

const YAxis = ({ height, padding }) => (
  <Axis points={`${padding},${padding} ${padding},${height - padding} `} />
);

const setBubbleColor = () => {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
};

export const BubbleChart = ({ height, width, padding, yStep, xStep }) => {
  const [chartData, setChartData] = useState([]);

  const fetchScompanyData = async () => {
    const res = await fetch(
      "https://mocki.io/v1/18936d28-2f79-4840-b146-5622e8ad1e77"
    );
    const resJson = await res.json();
    setChartData(resJson);
  };

  useEffect(() => {
    fetchScompanyData();
  }, []);

  const drawBubbles = (height) => {
    return chartData.map((point, index) => (
      <g key={`${point.title}`}>
        <circle
          cx={point.salary + 20}
          cy={height - padding - point.compratio}
          r={point.headcount / 10 + 6}
          fill={setBubbleColor()}
          strokeWidth="0"
          strokeOpacity={0}
          className="myDIV"
          key={`${index}`}
          id="circle1"
          data-testid="circle"
        />
        <g className="hide info">
          <text
            textAnchor="middle"
            x={500}
            y={50}
            fontSize={"6px"}
            padding="20px"
          >
            {`Title - ${point.title}`}
          </text>
          <text textAnchor="middle" x={500} y={60} fontSize={"6px"}>
            {`Salary - ${point.salary}`}
          </text>
          <text textAnchor="middle" x={500} y={70} fontSize={"6px"}>
            {`Head Count - ${point.headcount}`}
          </text>
        </g>

        <text
          textAnchor="middle"
          x={point.salary + 20}
          y={height - padding - point.compratio}
          fill="white"
          fontSize={"4px"}
          key={`${point.title}-${index}`}
          data-testid="x-axis"
        >
          {point.title}
        </text>
      </g>
    ));
  };

  return (
    <>
      <svg viewBox={`0 0 ${width} ${height}`} data-testid="main-svg-container">
        <XAxis height={height} width={width} padding={padding} />
        <XAxisLabels
          height={height}
          width={width}
          padding={padding}
          xStep={xStep}
          data-testid="main-svg-container-1"
        />
        <YAxis height={height} padding={padding} />
        <YAxisLabels
          width={width}
          height={height}
          padding={padding}
          yStep={yStep}
        />
        {drawBubbles(height)}
      </svg>
    </>
  );
};
