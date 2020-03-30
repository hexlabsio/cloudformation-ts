import { Value } from '../../../kloudformation/Value';

export function blockerDeclarationProps(blockerDeclarationPropsProps: BlockerDeclarationProps): BlockerDeclarationProps { return (blockerDeclarationPropsProps) as unknown as BlockerDeclarationProps }

export interface BlockerDeclarationProps {
    name: Value<string>;
    type: Value<string>;
}