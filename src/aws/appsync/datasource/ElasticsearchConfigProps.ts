import { Value } from '../../../kloudformation/Value';

export function elasticsearchConfigProps(elasticsearchConfigPropsProps: ElasticsearchConfigProps): ElasticsearchConfigProps { return (elasticsearchConfigPropsProps) as unknown as ElasticsearchConfigProps }

export interface ElasticsearchConfigProps {
    awsRegion: Value<string>;
    endpoint: Value<string>;
}