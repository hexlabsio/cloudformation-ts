import { Value } from '../../../kloudformation/Value';

export function elasticsearchBufferingHintsProps(elasticsearchBufferingHintsPropsProps: ElasticsearchBufferingHintsProps): ElasticsearchBufferingHintsProps { return (elasticsearchBufferingHintsPropsProps) as unknown as ElasticsearchBufferingHintsProps }

export interface ElasticsearchBufferingHintsProps {
    intervalInSeconds: Value<number>;
    sizeInMBs: Value<number>;
}