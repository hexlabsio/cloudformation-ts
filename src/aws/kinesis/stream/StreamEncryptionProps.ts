import { Value } from '../../../kloudformation/Value';

export function streamEncryptionProps(streamEncryptionPropsProps: StreamEncryptionProps): StreamEncryptionProps { return (streamEncryptionPropsProps) as unknown as StreamEncryptionProps }

export interface StreamEncryptionProps {
    encryptionType: Value<string>;
    keyId: Value<string>;
}