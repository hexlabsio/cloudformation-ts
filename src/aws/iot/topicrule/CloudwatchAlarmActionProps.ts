import { Value } from '../../../kloudformation/Value';

export interface CloudwatchAlarmActionProps {
  alarmName: Value<string>
  roleArn: Value<string>
  stateReason: Value<string>
  stateValue: Value<string>
}