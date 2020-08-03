import { ScheduleProps } from './ScheduleProps';
import { TriggeringDatasetProps } from './TriggeringDatasetProps';

export interface TriggerProps {
  schedule?: ScheduleProps
  triggeringDataset?: TriggeringDatasetProps
}