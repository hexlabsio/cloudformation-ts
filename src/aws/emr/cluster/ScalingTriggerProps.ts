import { CloudWatchAlarmDefinitionProps } from './CloudWatchAlarmDefinitionProps';

export function scalingTriggerProps(scalingTriggerPropsProps: ScalingTriggerProps): ScalingTriggerProps { return (scalingTriggerPropsProps) }

export interface ScalingTriggerProps {
    cloudWatchAlarmDefinition: CloudWatchAlarmDefinitionProps;
}