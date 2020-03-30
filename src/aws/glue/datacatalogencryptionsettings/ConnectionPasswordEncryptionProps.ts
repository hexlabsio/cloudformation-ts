import { Value } from '../../../kloudformation/Value';

export function connectionPasswordEncryptionProps(connectionPasswordEncryptionPropsProps: ConnectionPasswordEncryptionProps): ConnectionPasswordEncryptionProps { return (connectionPasswordEncryptionPropsProps) as unknown as ConnectionPasswordEncryptionProps }

export interface ConnectionPasswordEncryptionProps {
    returnConnectionPasswordEncrypted?: Value<boolean>;
    kmsKeyId?: Value<string>;
}