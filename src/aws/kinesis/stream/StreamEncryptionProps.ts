import { Value } from '../../../kloudformation/Value';

export function streamEncryptionProps(streamEncryptionPropsProps: StreamEncryptionProps): StreamEncryptionProps { return (streamEncryptionPropsProps) }

export interface StreamEncryptionProps {
    encryptionType: Value<string>;
    keyId: Value<string>;
}