import { Value } from '../../../kloudformation/Value';

export function elasticInferenceAcceleratorProps(elasticInferenceAcceleratorPropsProps: ElasticInferenceAcceleratorProps): ElasticInferenceAcceleratorProps { return (elasticInferenceAcceleratorPropsProps) as unknown as ElasticInferenceAcceleratorProps }

export interface ElasticInferenceAcceleratorProps {
    type: Value<string>;
    count?: Value<number>;
}