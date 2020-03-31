import { ActionDeclarationProps } from './ActionDeclarationProps';
import { Value } from '../../../kloudformation/Value';
import { BlockerDeclarationProps } from './BlockerDeclarationProps';

export function stageDeclarationProps(stageDeclarationPropsProps: StageDeclarationProps): StageDeclarationProps { return (stageDeclarationPropsProps) }

export interface StageDeclarationProps {
    actions: ActionDeclarationProps[];
    name: Value<string>;
    blockers?: BlockerDeclarationProps[];
}