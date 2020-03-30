import { Value } from '../../../kloudformation/Value';

export function vpcConfigProps(vpcConfigPropsProps: VpcConfigProps): VpcConfigProps { return (vpcConfigPropsProps) as unknown as VpcConfigProps }

export interface VpcConfigProps {
    securityGroupIds: Value<Value<string>[]>;
    subnetIds: Value<Value<string>[]>;
}