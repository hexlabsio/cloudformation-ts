import { Value } from '../../../kloudformation/Value';

export function inputArtifactProps(inputArtifactPropsProps: InputArtifactProps): InputArtifactProps { return (inputArtifactPropsProps) }

export interface InputArtifactProps {
    name: Value<string>;
}