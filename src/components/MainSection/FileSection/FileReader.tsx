import { useEffect, useState } from "react";
import Papa from "papaparse";
import type { ExperimentLog } from "../../../interfaces/FileInterface.ts";
import type { ExperimentGroups } from "../../../interfaces/GroupedDataInterface.ts";
import { groupData } from "../../../services/GroupData.ts";
import { Charts } from "./Charts.tsx";

type FileReaderProps = {
  file: File;
};

export function FileReader({ file }: Readonly<FileReaderProps>) {
  const [groupedData, setGroupedData] = useState<ExperimentGroups>({});
  const [selectedExperiments, setSelectedExperiments] = useState<string[]>([]);
  const [selectedMetric, setSelectedMetric] = useState<string>("");

  useEffect(() => {
    Papa.parse<ExperimentLog>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setGroupedData(groupData(results.data));
      },
    });
  }, [file]);

  const handleExperimentToggle = (key: string) => {
    setSelectedExperiments((prev) =>
      prev.includes(key)
        ? prev.filter((item) => item !== key)
        : [...prev, key]
    );
  };

  const handleMetricSelect = (key: string) => {
    setSelectedMetric(key);
  };

  return (
    <div className="flex pt-10 gap-20">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          {Object.keys(groupedData).map((key) => (
            <label
              key={key}
              className={`cursor-pointer border rounded-xl px-4 py-2 transition ${
                selectedExperiments.includes(key)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => handleExperimentToggle(key)}
            >
              {key}
            </label>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          {Object.keys(groupedData).length > 0 &&
            Object.keys(groupedData["exp_1"]).map((key) => (
              <label
                key={key}
                className={`cursor-pointer border rounded-xl px-4 py-2 transition ${
                  selectedMetric === key
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => handleMetricSelect(key)}
              >
                {key}
              </label>
            ))}
        </div>
      </div>


      <Charts
        groupedData={groupedData}
        selectedExperiments={selectedExperiments}
        selectedMetrics={selectedMetric}
      />
    </div>
  );
}
