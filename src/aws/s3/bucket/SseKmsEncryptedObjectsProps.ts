import { Value } from '../../../kloudformation/Value';

export function sseKmsEncryptedObjectsProps(sseKmsEncryptedObjectsPropsProps: SseKmsEncryptedObjectsProps): SseKmsEncryptedObjectsProps { return (sseKmsEncryptedObjectsPropsProps) as unknown as SseKmsEncryptedObjectsProps }

export interface SseKmsEncryptedObjectsProps {
    status: Value<string>;
}