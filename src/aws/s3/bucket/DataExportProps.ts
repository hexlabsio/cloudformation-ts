import { DestinationProps } from './DestinationProps';
import { Value } from '../../../kloudformation/Value';

export function dataExportProps(dataExportPropsProps: DataExportProps): DataExportProps { return (dataExportPropsProps) as unknown as DataExportProps }

export interface DataExportProps {
    destination: DestinationProps;
    outputSchemaVersion: Value<string>;
}