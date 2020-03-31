import { Value } from '../../../kloudformation/Value';

export function elasticsearchRetryOptionsProps(elasticsearchRetryOptionsPropsProps: ElasticsearchRetryOptionsProps): ElasticsearchRetryOptionsProps { return (elasticsearchRetryOptionsPropsProps) }

export interface ElasticsearchRetryOptionsProps {
    durationInSeconds: Value<number>;
}