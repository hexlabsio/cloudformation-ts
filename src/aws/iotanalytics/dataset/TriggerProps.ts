import { ScheduleProps } from './ScheduleProps';
import { TriggeringDatasetProps } from './TriggeringDatasetProps';

export function triggerProps(triggerPropsProps: TriggerProps): TriggerProps { return (triggerPropsProps) as unknown as TriggerProps }

export interface TriggerProps {
    schedule?: ScheduleProps;
    triggeringDataset?: TriggeringDatasetProps;
}