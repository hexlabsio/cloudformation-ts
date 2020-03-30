import { Value } from '../../../kloudformation/Value';

export function vPCOptionsProps(vPCOptionsPropsProps: VPCOptionsProps): VPCOptionsProps { return (vPCOptionsPropsProps) as unknown as VPCOptionsProps }

export interface VPCOptionsProps {
    securityGroupIds?: Value<Value<string>[]>;
    subnetIds?: Value<Value<string>[]>;
}