import { Value } from '../../../kloudformation/Value';

export function elasticGpuSpecificationProps(elasticGpuSpecificationPropsProps: ElasticGpuSpecificationProps): ElasticGpuSpecificationProps { return (elasticGpuSpecificationPropsProps) as unknown as ElasticGpuSpecificationProps }

export interface ElasticGpuSpecificationProps {
    type: Value<string>;
}