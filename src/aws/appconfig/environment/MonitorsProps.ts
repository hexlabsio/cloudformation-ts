import { Value } from '../../../kloudformation/Value';

export interface MonitorsProps {
  alarmArn?: Value<string>
  alarmRoleArn?: Value<string>
}