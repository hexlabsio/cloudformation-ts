import { SseKmsEncryptedObjectsProps } from './SseKmsEncryptedObjectsProps';

export function sourceSelectionCriteriaProps(sourceSelectionCriteriaPropsProps: SourceSelectionCriteriaProps): SourceSelectionCriteriaProps { return (sourceSelectionCriteriaPropsProps) as unknown as SourceSelectionCriteriaProps }

export interface SourceSelectionCriteriaProps {
    sseKmsEncryptedObjects: SseKmsEncryptedObjectsProps;
}