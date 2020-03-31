import { Value } from '../../../kloudformation/Value';

export function cloudwatchAlarmActionProps(cloudwatchAlarmActionPropsProps: CloudwatchAlarmActionProps): CloudwatchAlarmActionProps { return (cloudwatchAlarmActionPropsProps) }

export interface CloudwatchAlarmActionProps {
    alarmName: Value<string>;
    roleArn: Value<string>;
    stateReason: Value<string>;
    stateValue: Value<string>;
}