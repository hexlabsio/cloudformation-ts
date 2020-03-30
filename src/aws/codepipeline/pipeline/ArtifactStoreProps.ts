import { Value } from '../../../kloudformation/Value';
import { EncryptionKeyProps } from './EncryptionKeyProps';

export function artifactStoreProps(artifactStorePropsProps: ArtifactStoreProps): ArtifactStoreProps { return (artifactStorePropsProps) as unknown as ArtifactStoreProps }

export interface ArtifactStoreProps {
    location: Value<string>;
    type: Value<string>;
    encryptionKey?: EncryptionKeyProps;
}