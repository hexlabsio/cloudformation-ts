import { Value } from '../../../kloudformation/Value';

export function vpcConfigProps(vpcConfigPropsProps: VpcConfigProps): VpcConfigProps { return (vpcConfigPropsProps) as unknown as VpcConfigProps }

export interface VpcConfigProps {
    subnets?: Value<Value<string>[]>;
    vpcId?: Value<string>;
    securityGroupIds?: Value<Value<string>[]>;
}