import { Value } from '../../../kloudformation/Value';

export interface ArtifactsProps {
  path?: Value<string>
  type: Value<string>
  artifactIdentifier?: Value<string>
  overrideArtifactName?: Value<boolean>
  packaging?: Value<string>
  encryptionDisabled?: Value<boolean>
  location?: Value<string>
  name?: Value<string>
  namespaceType?: Value<string>
}