import { Value } from '../../../kloudformation/Value';

export function elasticsearchBufferingHintsProps(elasticsearchBufferingHintsPropsProps: ElasticsearchBufferingHintsProps): ElasticsearchBufferingHintsProps { return (elasticsearchBufferingHintsPropsProps) }

export interface ElasticsearchBufferingHintsProps {
    intervalInSeconds: Value<number>;
    sizeInMBs: Value<number>;
}