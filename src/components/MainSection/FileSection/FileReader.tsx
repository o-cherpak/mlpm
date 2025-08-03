import { useEffect, useState } from "react";
import Papa from "papaparse";
import type { ExperimentLog } from "../../../interfaces/FileInterface.ts";
import { Charts } from "./Charts";
import { groupDataByMetric } from "../../../services/GroupData";
import type { MetricGroups } from "../../../interfaces/GroupedDataInterface.ts";

type FileReaderProps = {
  file: File;
};

export function FileReader({ file }: Readonly<FileReaderProps>) {
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
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-wrap wrap py-10 gap-3">
        {allExperiments.map((expId) => (
          <button
            key={expId}
            onClick={() => handleExperimentToggle(expId)}
            className={`px-4 py-2 rounded-xl border ${
              selectedExperiments.includes(expId)
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {expId}
          </button>
        ))}
      </div>

      <Charts
        data={groupedData}
        metrics={METRICS}
        experiments={selectedExperiments}
      />
    </div>
  );
}
