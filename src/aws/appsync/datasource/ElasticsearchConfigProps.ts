import { Value } from '../../../kloudformation/Value';

export function elasticsearchConfigProps(elasticsearchConfigPropsProps: ElasticsearchConfigProps): ElasticsearchConfigProps { return (elasticsearchConfigPropsProps) }

export interface ElasticsearchConfigProps {
    awsRegion: Value<string>;
    endpoint: Value<string>;
}