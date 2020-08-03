import { AlarmProps } from './AlarmProps';
import { Value } from '../../../kloudformation/Value';

export interface AlarmConfigurationProps {
  alarms?: AlarmProps[]
  enabled?: Value<boolean>
  ignorePollAlarmFailure?: Value<boolean>
}