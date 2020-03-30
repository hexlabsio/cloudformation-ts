import { Value } from '../../../kloudformation/Value';

export function launchTemplateElasticInferenceAcceleratorProps(launchTemplateElasticInferenceAcceleratorPropsProps: LaunchTemplateElasticInferenceAcceleratorProps): LaunchTemplateElasticInferenceAcceleratorProps { return (launchTemplateElasticInferenceAcceleratorPropsProps) as unknown as LaunchTemplateElasticInferenceAcceleratorProps }

export interface LaunchTemplateElasticInferenceAcceleratorProps {
    type?: Value<string>;
    count?: Value<number>;
}