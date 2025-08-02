import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from "recharts";
import type {ExperimentGroups} from "../../../interfaces/GroupedDataInterface.ts";
import type {ExperimentLog} from "../../../interfaces/FileInterface.ts";

type ChartsProps = {
  groupedData: ExperimentGroups;
  selectedMetrics: string;
  selectedExperiments: string[];
};

type MergedPoint = {
  step: number;
  [experimentId: string]: number | null;
};

export function Charts({groupedData, selectedMetrics, selectedExperiments}: ChartsProps) {
  const baseData = groupedData[selectedExperiments[0]]?.[selectedMetrics];

  if (!baseData || baseData.length === 0) return null;
  if (selectedExperiments.length === 0) return null;

  console.log("baseData", baseData);


  const stepSize = 10;

  const sampledData: ExperimentLog[] = [];
  for (let i = 0; i < baseData.length; i += stepSize) {
    sampledData.push(baseData[i]);
  }

  const mergedData: MergedPoint[] = sampledData.map(point => {
    const item: MergedPoint = {step: point.step};

    selectedExperiments.forEach(expId => {
      const experimentPoints = groupedData[expId]?.[selectedMetrics];
      const found = experimentPoints.find(p => p.step === point.step);
      item[expId] = found ? found.value : null;
    });

    return item;
  });

  console.log("mergedData", mergedData);

  return (
    <LineChart width={720} height={480} data={mergedData}>
      <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="step"/>
      <YAxis/>
      <Tooltip/>
      {selectedExperiments.map((experimentId, index) => (
        <Line
          key={experimentId}
          type="monotone"
          dataKey={experimentId}
          name={`Experiment ${experimentId}`}
          stroke={["#8884d8", "#82ca9d", "#ff7300"][index % 3]}
          dot={false}
          isAnimationActive={false}
          connectNulls={true}
        />
      ))}
    </LineChart>
  );
}
