import { Value } from '../../../kloudformation/Value';

export function alarmProps(alarmPropsProps: AlarmProps): AlarmProps { return (alarmPropsProps) }

export interface AlarmProps {
    name?: Value<string>;
}