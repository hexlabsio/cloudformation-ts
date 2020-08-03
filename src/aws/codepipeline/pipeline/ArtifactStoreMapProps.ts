import { ArtifactStoreProps } from './ArtifactStoreProps';
import { Value } from '../../../kloudformation/Value';

export interface ArtifactStoreMapProps {
  artifactStore: ArtifactStoreProps
  region: Value<string>
}