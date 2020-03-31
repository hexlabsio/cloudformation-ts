import { Value } from '../../../kloudformation/Value';
import { AccessControlTranslationProps } from './AccessControlTranslationProps';
import { EncryptionConfigurationProps } from './EncryptionConfigurationProps';

export function replicationDestinationProps(replicationDestinationPropsProps: ReplicationDestinationProps): ReplicationDestinationProps { return (replicationDestinationPropsProps) }

export interface ReplicationDestinationProps {
    bucket: Value<string>;
    accessControlTranslation?: AccessControlTranslationProps;
    account?: Value<string>;
    encryptionConfiguration?: EncryptionConfigurationProps;
    storageClass?: Value<string>;
}