import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { BubbleChart } from "../components/bubbleChart";

const height = 250;
const width = 600;
const padding = 20;
const yStep = 50;
const xStep = 100;

const mockChartData = [
  {
    title: "HR",
    salary: 180,
    compratio: 80,
    headcount: 100,
  },
  {
    title: "Marketing",
    salary: 190,
    compratio: 85,
    headcount: 80,
  },
];

const renderBubbleChart = () => {
  return render(
    <BubbleChart
      height={height}
      width={width}
      padding={padding}
      yStep={yStep}
      xStep={xStep}
    />
  );
};

describe("<BubbleChart/>", () => {
  describe("Success", () => {
    let chartData;

    beforeEach(() => {
      chartData = global.fetch;
      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockChartData),
        })
      );
    });

    afterEach(() => {
      global.fetch = chartData;
    });

    it("should renders the bubble chart", async () => {
      const { queryByTestId } = renderBubbleChart();
      expect(queryByTestId("main-svg-container")).toBeTruthy();
    });
  });
});
