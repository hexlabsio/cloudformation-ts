import { Value } from '../../../kloudformation/Value';

export function sourceSegmentsProps(sourceSegmentsPropsProps: SourceSegmentsProps): SourceSegmentsProps { return (sourceSegmentsPropsProps) }

export interface SourceSegmentsProps {
    id: Value<string>;
    version?: Value<number>;
}