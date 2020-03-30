import { Value } from '../../../kloudformation/Value';

export function launchTemplateOverridesProps(launchTemplateOverridesPropsProps: LaunchTemplateOverridesProps): LaunchTemplateOverridesProps { return (launchTemplateOverridesPropsProps) as unknown as LaunchTemplateOverridesProps }

export interface LaunchTemplateOverridesProps {
    availabilityZone?: Value<string>;
    instanceType?: Value<string>;
    spotPrice?: Value<string>;
    subnetId?: Value<string>;
    weightedCapacity?: Value<number>;
}