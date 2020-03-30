import { Value } from '../../../kloudformation/Value';

export function hostedZoneConfigProps(hostedZoneConfigPropsProps: HostedZoneConfigProps): HostedZoneConfigProps { return (hostedZoneConfigPropsProps) as unknown as HostedZoneConfigProps }

export interface HostedZoneConfigProps {
    comment?: Value<string>;
}