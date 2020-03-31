import { OrcSerDeProps } from './OrcSerDeProps';
import { ParquetSerDeProps } from './ParquetSerDeProps';

export function serializerProps(serializerPropsProps: SerializerProps): SerializerProps { return (serializerPropsProps) }

export interface SerializerProps {
    orcSerDe?: OrcSerDeProps;
    parquetSerDe?: ParquetSerDeProps;
}