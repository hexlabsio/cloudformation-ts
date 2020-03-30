import { Value } from '../../../kloudformation/Value';

export function parquetSerDeProps(parquetSerDePropsProps: ParquetSerDeProps): ParquetSerDeProps { return (parquetSerDePropsProps) as unknown as ParquetSerDeProps }

export interface ParquetSerDeProps {
    blockSizeBytes?: Value<number>;
    compression?: Value<string>;
    enableDictionaryCompression?: Value<boolean>;
    maxPaddingBytes?: Value<number>;
    pageSizeBytes?: Value<number>;
    writerVersion?: Value<string>;
}