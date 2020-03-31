import { Value } from '../../../kloudformation/Value';

export function hostedZoneTagProps(hostedZoneTagPropsProps: HostedZoneTagProps): HostedZoneTagProps { return (hostedZoneTagPropsProps) }

export interface HostedZoneTagProps {
    key: Value<string>;
    value: Value<string>;
}