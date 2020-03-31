import { Value } from '../../../kloudformation/Value';

export function vpcConfigProps(vpcConfigPropsProps: VpcConfigProps): VpcConfigProps { return (vpcConfigPropsProps) }

export interface VpcConfigProps {
    subnetIds?: Value<Value<string>[]>;
    securityGroupIds?: Value<Value<string>[]>;
}