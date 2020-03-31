import { Value } from '../../../kloudformation/Value';

export function outputArtifactProps(outputArtifactPropsProps: OutputArtifactProps): OutputArtifactProps { return (outputArtifactPropsProps) }

export interface OutputArtifactProps {
    name: Value<string>;
}