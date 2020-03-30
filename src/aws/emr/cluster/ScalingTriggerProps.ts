import { CloudWatchAlarmDefinitionProps } from './CloudWatchAlarmDefinitionProps';

export function scalingTriggerProps(scalingTriggerPropsProps: ScalingTriggerProps): ScalingTriggerProps { return (scalingTriggerPropsProps) as unknown as ScalingTriggerProps }

export interface ScalingTriggerProps {
    cloudWatchAlarmDefinition: CloudWatchAlarmDefinitionProps;
}