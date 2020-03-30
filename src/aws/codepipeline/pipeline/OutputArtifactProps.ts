import { Value } from '../../../kloudformation/Value';

export function outputArtifactProps(outputArtifactPropsProps: OutputArtifactProps): OutputArtifactProps { return (outputArtifactPropsProps) as unknown as OutputArtifactProps }

export interface OutputArtifactProps {
    name: Value<string>;
}