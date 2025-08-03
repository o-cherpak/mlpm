import type {ExperimentLog} from "./FileInterface.ts";

export interface MetricGroups {
  [metric: string]: {
    [experimentId: string]: ExperimentLog[];
  };
}


