import { OrcSerDeProps } from './OrcSerDeProps';
import { ParquetSerDeProps } from './ParquetSerDeProps';

export interface SerializerProps {
  orcSerDe?: OrcSerDeProps
  parquetSerDe?: ParquetSerDeProps
}