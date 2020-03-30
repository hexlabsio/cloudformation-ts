import { DataExportProps } from './DataExportProps';

export function storageClassAnalysisProps(storageClassAnalysisPropsProps: StorageClassAnalysisProps): StorageClassAnalysisProps { return (storageClassAnalysisPropsProps) as unknown as StorageClassAnalysisProps }

export interface StorageClassAnalysisProps {
    dataExport?: DataExportProps;
}