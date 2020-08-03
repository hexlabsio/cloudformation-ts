import { EncryptionAtRestProps } from './EncryptionAtRestProps';
import { EncryptionInTransitProps } from './EncryptionInTransitProps';

export interface EncryptionInfoProps {
  encryptionAtRest?: EncryptionAtRestProps
  encryptionInTransit?: EncryptionInTransitProps
}