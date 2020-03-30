import { Value } from '../../../kloudformation/Value';

export function zoneAwarenessConfigProps(zoneAwarenessConfigPropsProps: ZoneAwarenessConfigProps): ZoneAwarenessConfigProps { return (zoneAwarenessConfigPropsProps) as unknown as ZoneAwarenessConfigProps }

export interface ZoneAwarenessConfigProps {
    availabilityZoneCount?: Value<number>;
}