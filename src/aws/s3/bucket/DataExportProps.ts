import { DestinationProps } from './DestinationProps';
import { Value } from '../../../kloudformation/Value';

export function dataExportProps(dataExportPropsProps: DataExportProps): DataExportProps { return (dataExportPropsProps) }

export interface DataExportProps {
    destination: DestinationProps;
    outputSchemaVersion: Value<string>;
}