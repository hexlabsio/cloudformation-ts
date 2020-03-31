import { Value } from '../../../kloudformation/Value';

export function vpcConfigurationProps(vpcConfigurationPropsProps: VpcConfigurationProps): VpcConfigurationProps { return (vpcConfigurationPropsProps) }

export interface VpcConfigurationProps {
    vpcId?: Value<string>;
}