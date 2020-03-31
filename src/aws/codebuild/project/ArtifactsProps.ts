import { Value } from '../../../kloudformation/Value';

export function artifactsProps(artifactsPropsProps: ArtifactsProps): ArtifactsProps { return (artifactsPropsProps) }

export interface ArtifactsProps {
    type: Value<string>;
    path?: Value<string>;
    artifactIdentifier?: Value<string>;
    overrideArtifactName?: Value<boolean>;
    packaging?: Value<string>;
    encryptionDisabled?: Value<boolean>;
    location?: Value<string>;
    name?: Value<string>;
    namespaceType?: Value<string>;
}