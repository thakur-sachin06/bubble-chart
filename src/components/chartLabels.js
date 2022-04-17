import React from "react";

export const XAxisLabels = ({ height, padding, xStep = 100 }) => {
  const y = height + 5 - padding;
  return (
    <>
      {Array.from(Array(10).keys()).map((elt, index) => {
        const xAxis = index * xStep + padding;
        return (
          <text
            x={xAxis}
            y={y}
            style={{
              fontSize: "4px",
              fontFamily: "Helvetica",
              color: "black",
            }}
            key={index}
          >
            {index * 100}
          </text>
        );
      })}
    </>
  );
};

export const YAxisLabels = ({ width, height, padding, yStep = 100 }) => {
  const x = width / 50;
  return (
    <>
      {Array.from(Array(8).keys()).map((elt, index) => {
        const y = height - padding - index * yStep;
        return (
          <text
            x={x}
            y={y}
            style={{
              fontSize: "4px",
              fontFamily: "Helvetica",
              color: "black",
            }}
          >
            {index * 50}
          </text>
        );
      })}
    </>
  );
};
