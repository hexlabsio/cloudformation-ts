import { Value } from '../../../kloudformation/Value';

export function orcSerDeProps(orcSerDePropsProps: OrcSerDeProps): OrcSerDeProps { return (orcSerDePropsProps) as unknown as OrcSerDeProps }

export interface OrcSerDeProps {
    blockSizeBytes?: Value<number>;
    bloomFilterColumns?: Value<Value<string>[]>;
    bloomFilterFalsePositiveProbability?: Value<number>;
    compression?: Value<string>;
    dictionaryKeyThreshold?: Value<number>;
    enablePadding?: Value<boolean>;
    formatVersion?: Value<string>;
    paddingTolerance?: Value<number>;
    rowIndexStride?: Value<number>;
    stripeSizeBytes?: Value<number>;
}