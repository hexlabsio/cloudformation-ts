import { Value } from '../../../kloudformation/Value';

export function elasticGpuSpecificationProps(elasticGpuSpecificationPropsProps: ElasticGpuSpecificationProps): ElasticGpuSpecificationProps { return (elasticGpuSpecificationPropsProps) }

export interface ElasticGpuSpecificationProps {
    type: Value<string>;
}