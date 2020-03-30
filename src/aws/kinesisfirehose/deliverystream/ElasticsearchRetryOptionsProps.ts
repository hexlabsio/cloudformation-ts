import { Value } from '../../../kloudformation/Value';

export function elasticsearchRetryOptionsProps(elasticsearchRetryOptionsPropsProps: ElasticsearchRetryOptionsProps): ElasticsearchRetryOptionsProps { return (elasticsearchRetryOptionsPropsProps) as unknown as ElasticsearchRetryOptionsProps }

export interface ElasticsearchRetryOptionsProps {
    durationInSeconds: Value<number>;
}