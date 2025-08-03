import { useEffect, useState } from "react";
import Papa from "papaparse";
import type { ExperimentLog } from "../../../interfaces/FileInterface.ts";
import { Charts } from "./Charts";
import { groupDataByMetric } from "../../../services/GroupData";
import type { MetricGroups } from "../../../interfaces/GroupedDataInterface.ts";
import {ExperimentsButton} from "./ExperimentsButton.tsx";

type FileReaderProps = {
  file: File;
};

export function ReaderAndDisplayer({ file }: Readonly<FileReaderProps>) {
  const [groupedData, setGroupedData] = useState<MetricGroups>({});
  const [selectedExperiments, setSelectedExperiments] = useState<string[]>([]);

  const METRICS = Object.keys(groupedData);

  useEffect(() => {
    Papa.parse<ExperimentLog>(file, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
      complete: (results) => {
        setGroupedData(groupDataByMetric(results.data));
      },
    });
  }, [file]);

  const handleExperimentToggle = (expId: string) => {
    setSelectedExperiments((prev) =>
      prev.includes(expId)
        ? prev.filter((id) => id !== expId)
        : [...prev, expId]
    );
  };

  const allExperiments = Object.keys(
    groupedData[METRICS[0]] || {}
  );

  return (
    <div className="flex flex-col justify-center w-full items-center">

      <ExperimentsButton
        allExperiments={allExperiments}
        selectedExperiments={selectedExperiments}
        onClick={handleExperimentToggle}
      />

      <Charts
        data={groupedData}
        metrics={METRICS}
        experiments={selectedExperiments}
      />
    </div>
  );
}
