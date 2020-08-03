import { DestinationProps } from './DestinationProps';
import { Value } from '../../../kloudformation/Value';

export interface DataExportProps {
  destination: DestinationProps
  outputSchemaVersion: Value<string>
}