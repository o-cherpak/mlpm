import {useEffect, useState} from "react";
import Papa from "papaparse";
import type {ExperimentLog} from "../../../interfaces/FileInterface.ts";
import type {ExperimentGroups} from "../../../interfaces/GroupedDataInterface.ts";
import {groupData} from "../../../services/GroupData.ts";

type FileReaderProps = {
  file: File;
};

export function FileReader({file}: Readonly<FileReaderProps>) {
  const [data, setData] = useState<ExperimentLog[]>([]);
  const [groupedData, setGroupedData] = useState<ExperimentGroups>({});


  useEffect(() => {
    if (!file) {
      setData([]);
      return;
    }

    Papa.parse<ExperimentLog>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  }, [file]);

  useEffect(() => {
    setGroupedData(groupData(data));
  }, [data]);

  return (
    <div>

    </div>
  );
}
