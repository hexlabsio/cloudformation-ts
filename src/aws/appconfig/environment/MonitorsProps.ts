import { Value } from '../../../kloudformation/Value';

export function monitorsProps(monitorsPropsProps: MonitorsProps): MonitorsProps { return (monitorsPropsProps) }

export interface MonitorsProps {
    alarmArn?: Value<string>;
    alarmRoleArn?: Value<string>;
}