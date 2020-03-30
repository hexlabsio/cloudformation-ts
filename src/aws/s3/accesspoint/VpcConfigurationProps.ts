import { Value } from '../../../kloudformation/Value';

export function vpcConfigurationProps(vpcConfigurationPropsProps: VpcConfigurationProps): VpcConfigurationProps { return (vpcConfigurationPropsProps) as unknown as VpcConfigurationProps }

export interface VpcConfigurationProps {
    vpcId?: Value<string>;
}