import { EncryptionAtRestProps } from './EncryptionAtRestProps';
import { EncryptionInTransitProps } from './EncryptionInTransitProps';

export function encryptionInfoProps(encryptionInfoPropsProps: EncryptionInfoProps): EncryptionInfoProps { return (encryptionInfoPropsProps) }

export interface EncryptionInfoProps {
    encryptionAtRest?: EncryptionAtRestProps;
    encryptionInTransit?: EncryptionInTransitProps;
}