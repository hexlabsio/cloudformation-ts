import { Value } from '../../../kloudformation/Value';

export function connectionPasswordEncryptionProps(connectionPasswordEncryptionPropsProps: ConnectionPasswordEncryptionProps): ConnectionPasswordEncryptionProps { return (connectionPasswordEncryptionPropsProps) }

export interface ConnectionPasswordEncryptionProps {
    returnConnectionPasswordEncrypted?: Value<boolean>;
    kmsKeyId?: Value<string>;
}