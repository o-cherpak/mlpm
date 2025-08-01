import type { ExperimentLog } from "../interfaces/FileInterface.ts";
import type {ExperimentGroups} from "../interfaces/GroupedDataInterface.ts";

export function groupData(data: ExperimentLog[]): ExperimentGroups {
  const groups: ExperimentGroups = {};

  for (const log of data) {
    const experimentId = log.experiment_id;
    const metric = log.metric_name;

    if (!groups[experimentId]) {
      groups[experimentId] = {};
    }

    if (!groups[experimentId][metric]) {
      groups[experimentId][metric] = [];
    }

    groups[experimentId][metric].push(log);
  }

  return groups;
}
