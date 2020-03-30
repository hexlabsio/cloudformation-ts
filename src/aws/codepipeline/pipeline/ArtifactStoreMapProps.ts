import { ArtifactStoreProps } from './ArtifactStoreProps';
import { Value } from '../../../kloudformation/Value';

export function artifactStoreMapProps(artifactStoreMapPropsProps: ArtifactStoreMapProps): ArtifactStoreMapProps { return (artifactStoreMapPropsProps) as unknown as ArtifactStoreMapProps }

export interface ArtifactStoreMapProps {
    artifactStore: ArtifactStoreProps;
    region: Value<string>;
}