import ReactECharts from "echarts-for-react";

interface ExperimentLog {
  experiment_id: string;
  metric_name: string;
  step: number;
  value: number;
}

interface MetricGroups {
  [metric: string]: {
    [experimentId: string]: ExperimentLog[];
  };
}

interface ChartsProps {
  data: MetricGroups;
  metrics: string[];
  experiments: string[];
}

const COLORS = ["#5470C6", "#91CC75", "#EE6666", "#FAC858"];

export function Charts({data, metrics, experiments}: Readonly<ChartsProps>) {
  if (!metrics || metrics.length === 0) {
    return <p className="text-gray-500">Loading...</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-6 lg:px-12 py-6">
      {metrics.map((metric) => {
        const metricData = data[metric] || {};

        const series = experiments.map((expId, idx) => ({
          name: expId,
          type: "line",
          showSymbol: false,
          data: metricData[expId]
            ? metricData[expId].map((log) => [log.step, log.value])
            : [],
          color: COLORS[idx % COLORS.length],
          animation: false,
        }));

        const option = {
          title: {
            text: metric.toUpperCase(),
            left: "right",
            textStyle: {fontSize: 16, fontWeight: 600, color: "#000"},
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
            className="bg-white shadow-lg rounded-xl p-4 border border-gray-200"
          >
            <ReactECharts
              option={option}
              style={{width: "580px", height: "350px"}}
              notMerge={true}
              lazyUpdate={true}
            />
          </div>
        );
      })}
    </div>
  );
}
