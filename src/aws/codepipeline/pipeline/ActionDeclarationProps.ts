import { ActionTypeIdProps } from './ActionTypeIdProps';
import { Value } from '../../../kloudformation/Value';
import { InputArtifactProps } from './InputArtifactProps';
import { OutputArtifactProps } from './OutputArtifactProps';

export function actionDeclarationProps(actionDeclarationPropsProps: ActionDeclarationProps): ActionDeclarationProps { return (actionDeclarationPropsProps) }

export interface ActionDeclarationProps {
    actionTypeId: ActionTypeIdProps;
    name: Value<string>;
    configuration?: Value<any>;
    inputArtifacts?: InputArtifactProps[];
    namespace?: Value<string>;
    outputArtifacts?: OutputArtifactProps[];
    region?: Value<string>;
    roleArn?: Value<string>;
    runOrder?: Value<number>;
}