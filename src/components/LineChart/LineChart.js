import React, { useRef, useEffect, useCallback } from "react";
import Highcharts from "highcharts";
import PropTypes from "prop-types";
import styled from "styled-components";
const Container = styled.div`
  width: 80%;
  height: 400px;
  margin: 0 auto;
  border: 1px solid white;
  border-radius: 10px;
  margin-bottom: 30px;
`;

const LineChart = ({ seriesData }) => {
  const containerRef = useRef(null);
  const initChart = useCallback(() => {
    Highcharts.setOptions({
      chart: {
        backgroundColor: "transparent",
      },
      colors: ["#f1c40f"],
    });
    const chart = new Highcharts.chart({
      chart: {
        renderTo: containerRef.current,
        type: "line",
      },
      legend: {
        itemStyle: {
          color: "#ffffff",
          fontWeight: "bold",
        },
      },
      title: {
        text: "Score Distribution",
        style: {
          color: "#ffffff",
        },
      },
      xAxis: {
        categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        labels: {
          style: {
            color: "white",
          },
        },
      },
      yAxis: {
        title: {
          text: ``,
        },
        labels: {
          style: {
            color: "white",
          },
        },
      },
      series: [
        {
          name: `${seriesData.reduce(
            (x, y) => x + y.doc_count,
            0
          )} People Rated`,
          data: seriesData.map((data) => data.doc_count),
        },
      ],
      plotOptions: {
        series: {
          marker: {
            fillColor: "#FFFFFF",
            lineWidth: 2,
            lineColor: null, // inherit from series
          },
        },
      },
    });
  }, [seriesData]);
  useEffect(() => {
    initChart();
  }, [seriesData, initChart]);
  return <Container ref={containerRef}></Container>;
};
LineChart.PropsType = {
  seriesData: PropTypes.array,
};
export default LineChart;
