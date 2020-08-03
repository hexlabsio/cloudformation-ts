import { AccessControlTranslationProps } from './AccessControlTranslationProps';
import { Value } from '../../../kloudformation/Value';
import { EncryptionConfigurationProps } from './EncryptionConfigurationProps';
import { MetricsProps } from './MetricsProps';
import { ReplicationTimeProps } from './ReplicationTimeProps';

export interface ReplicationDestinationProps {
  accessControlTranslation?: AccessControlTranslationProps
  account?: Value<string>
  bucket: Value<string>
  encryptionConfiguration?: EncryptionConfigurationProps
  metrics?: MetricsProps
  replicationTime?: ReplicationTimeProps
  storageClass?: Value<string>
}