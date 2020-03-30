import { Value } from '../../../kloudformation/Value';

export function alarmProps(alarmPropsProps: AlarmProps): AlarmProps { return (alarmPropsProps) as unknown as AlarmProps }

export interface AlarmProps {
    name?: Value<string>;
}