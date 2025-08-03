import ReactECharts from "echarts-for-react";
import {ClipLoader} from "react-spinners";
import type {MetricGroups} from "../../../interfaces/GroupedDataInterface.ts";

interface ChartsProps {
  data: MetricGroups;
  metrics: string[];
  experiments: string[];
}

export function Charts({data, metrics, experiments}: Readonly<ChartsProps>) {
  if (!metrics || metrics.length === 0) {
    return (
      <div className="flex justify-center items-center h-40">
        <ClipLoader color="#4F46E5" size={40}/>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-4 lg:px-8 py-4">
      {metrics.map((metric) => {
        const metricData = data[metric] || {};

        const series = experiments.map((expId) => ({
          name: expId,
          type: "line",
          showSymbol: false,
          data: metricData[expId]
            ? metricData[expId].map((log) => [log.step, log.value])
            : [],
          animation: false,
        }));

        const option = {
          title: {
            text: metric.toUpperCase(),
            left: "right",
            textStyle: {fontSize: 14, fontWeight: 600, color: "#000"},
          },
          tooltip: {trigger: "axis"},
          legend: {
            top: 10,
            data: experiments,
            textStyle: {fontSize: 12},
          },
          grid: {top: 60, left: 50, right: 20, bottom: 40},
          xAxis: {
            type: "value",
            name: "Step",
            min: "dataMin",
            max: "dataMax",
          },
          yAxis: {
            type: "value",
            name: "Value",
          },
          dataZoom: [
            {type: "inside"},
            {type: "slider", height: 15},
          ],
          series,
        };

        return (
          <div
            key={metric}
            className="bg-white shadow-lg rounded-xl p-4 border border-gray-200 w-full"
          >
            <ReactECharts
              option={option}
              style={{width: "100%", height: "320px"}}
              notMerge={true}
              lazyUpdate={true}
            />
          </div>
        );
      })}
    </div>
  );
}
