import { Value } from '../../../kloudformation/Value';

export function launchTemplateOverridesProps(launchTemplateOverridesPropsProps: LaunchTemplateOverridesProps): LaunchTemplateOverridesProps { return (launchTemplateOverridesPropsProps) as unknown as LaunchTemplateOverridesProps }

export interface LaunchTemplateOverridesProps {
    instanceType?: Value<string>;
    weightedCapacity?: Value<string>;
}