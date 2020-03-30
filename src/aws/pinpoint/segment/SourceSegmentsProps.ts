import { Value } from '../../../kloudformation/Value';

export function sourceSegmentsProps(sourceSegmentsPropsProps: SourceSegmentsProps): SourceSegmentsProps { return (sourceSegmentsPropsProps) as unknown as SourceSegmentsProps }

export interface SourceSegmentsProps {
    id: Value<string>;
    version?: Value<number>;
}