import { Value } from '../../../kloudformation/Value';

export function monitorsProps(monitorsPropsProps: MonitorsProps): MonitorsProps { return (monitorsPropsProps) as unknown as MonitorsProps }

export interface MonitorsProps {
    alarmArn?: Value<string>;
    alarmRoleArn?: Value<string>;
}