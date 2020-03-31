import { Value } from '../../../kloudformation/Value';

export function hostedZoneConfigProps(hostedZoneConfigPropsProps: HostedZoneConfigProps): HostedZoneConfigProps { return (hostedZoneConfigPropsProps) }

export interface HostedZoneConfigProps {
    comment?: Value<string>;
}