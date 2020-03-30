import { Value } from '../../../kloudformation/Value';

export function inputArtifactProps(inputArtifactPropsProps: InputArtifactProps): InputArtifactProps { return (inputArtifactPropsProps) as unknown as InputArtifactProps }

export interface InputArtifactProps {
    name: Value<string>;
}