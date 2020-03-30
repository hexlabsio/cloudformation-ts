import { Value } from '../../../kloudformation/Value';

export function artifactDetailsProps(artifactDetailsPropsProps: ArtifactDetailsProps): ArtifactDetailsProps { return (artifactDetailsPropsProps) as unknown as ArtifactDetailsProps }

export interface ArtifactDetailsProps {
    maximumCount: Value<number>;
    minimumCount: Value<number>;
}