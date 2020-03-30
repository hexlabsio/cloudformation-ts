import { AlarmProps } from './AlarmProps';
import { Value } from '../../../kloudformation/Value';

export function alarmConfigurationProps(alarmConfigurationPropsProps: AlarmConfigurationProps): AlarmConfigurationProps { return (alarmConfigurationPropsProps) as unknown as AlarmConfigurationProps }

export interface AlarmConfigurationProps {
    alarms?: AlarmProps[];
    enabled?: Value<boolean>;
    ignorePollAlarmFailure?: Value<boolean>;
}