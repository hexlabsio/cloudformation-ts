import { Value } from '../../../kloudformation/Value';

export function alarmIdentifierProps(alarmIdentifierPropsProps: AlarmIdentifierProps): AlarmIdentifierProps { return (alarmIdentifierPropsProps) }

export interface AlarmIdentifierProps {
    name: Value<string>;
    region: Value<string>;
}