import type {ExperimentLog} from "./FileInterface.ts";

export interface ExperimentGroups {
  [experimentId: string]: {
    [metric: string]: ExperimentLog[];
  }
}


