import type {ExperimentGroups} from "../../../interfaces/GroupedDataInterface.ts";

type FileDisplayerProps = {
  data: ExperimentGroups
}

export function FileDisplayer({data}: Readonly<FileDisplayerProps>) {
  console.log(data)

  return (
    <div>
    </div>
  );
}