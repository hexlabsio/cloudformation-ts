import { ActionDeclarationProps } from './ActionDeclarationProps';
import { BlockerDeclarationProps } from './BlockerDeclarationProps';
import { Value } from '../../../kloudformation/Value';

export interface StageDeclarationProps {
  actions: ActionDeclarationProps[]
  blockers?: BlockerDeclarationProps[]
  name: Value<string>
}