import type { ExperimentLog } from "../interfaces/FileInterface.ts";
import type { MetricGroups } from "../interfaces/GroupedDataInterface.ts";

export function groupDataByMetric(data: ExperimentLog[]): MetricGroups {
  const groups: MetricGroups = {};

  for (const log of data) {
    const metric = log.metric_name;
    const experimentId = log.experiment_id;

    if (!groups[metric]) {
      groups[metric] = {};
    }

    if (!groups[metric][experimentId]) {
      groups[metric][experimentId] = [];
    }

    groups[metric][experimentId].push(log);
  }

  return groups;
}
