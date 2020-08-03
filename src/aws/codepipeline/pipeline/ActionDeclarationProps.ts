import { ActionTypeIdProps } from './ActionTypeIdProps';
import { Value } from '../../../kloudformation/Value';
import { InputArtifactProps } from './InputArtifactProps';
import { OutputArtifactProps } from './OutputArtifactProps';

export interface ActionDeclarationProps {
  actionTypeId: ActionTypeIdProps
  configuration?: Value<any>
  inputArtifacts?: InputArtifactProps[]
  name: Value<string>
  namespace?: Value<string>
  outputArtifacts?: OutputArtifactProps[]
  region?: Value<string>
  roleArn?: Value<string>
  runOrder?: Value<number>
}