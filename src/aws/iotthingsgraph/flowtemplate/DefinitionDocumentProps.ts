import { Value } from '../../../kloudformation/Value';

export function definitionDocumentProps(definitionDocumentPropsProps: DefinitionDocumentProps): DefinitionDocumentProps { return (definitionDocumentPropsProps) }

export interface DefinitionDocumentProps {
    language: Value<string>;
    text: Value<string>;
}