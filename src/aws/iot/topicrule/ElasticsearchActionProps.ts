import { Value } from '../../../kloudformation/Value';

export function elasticsearchActionProps(elasticsearchActionPropsProps: ElasticsearchActionProps): ElasticsearchActionProps { return (elasticsearchActionPropsProps) as unknown as ElasticsearchActionProps }

export interface ElasticsearchActionProps {
    endpoint: Value<string>;
    id: Value<string>;
    index: Value<string>;
    roleArn: Value<string>;
    type: Value<string>;
}