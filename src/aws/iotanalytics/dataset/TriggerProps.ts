import { ScheduleProps } from './ScheduleProps';
import { TriggeringDatasetProps } from './TriggeringDatasetProps';

export function triggerProps(triggerPropsProps: TriggerProps): TriggerProps { return (triggerPropsProps) }

export interface TriggerProps {
    schedule?: ScheduleProps;
    triggeringDataset?: TriggeringDatasetProps;
}