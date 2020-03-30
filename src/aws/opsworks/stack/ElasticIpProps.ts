import { Value } from '../../../kloudformation/Value';

export function elasticIpProps(elasticIpPropsProps: ElasticIpProps): ElasticIpProps { return (elasticIpPropsProps) as unknown as ElasticIpProps }

export interface ElasticIpProps {
    ip: Value<string>;
    name?: Value<string>;
}