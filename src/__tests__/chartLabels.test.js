import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { XAxisLabels, YAxisLabels } from "../components/chartLabels";

const height = 250;
const width = 600;
const padding = 20;
const yStep = 50;
const xStep = 100;

const renderXAxisLabels = () => {
  return render(<XAxisLabels height={height} padding={padding} />);
};

const renderYAxisLabels = () => {
  return render(
    <XAxisLabels height={height} padding={padding} width={width} />
  );
};

describe("<ChartLabels />", () => {
  describe("Success", () => {
    it("should renders the X Axis Labels", async () => {
      renderXAxisLabels();
    });

    it("should renders the Y Axis Labels", async () => {
      renderYAxisLabels();
    });
  });
});
