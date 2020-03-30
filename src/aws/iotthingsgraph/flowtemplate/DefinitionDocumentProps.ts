import { Value } from '../../../kloudformation/Value';

export function definitionDocumentProps(definitionDocumentPropsProps: DefinitionDocumentProps): DefinitionDocumentProps { return (definitionDocumentPropsProps) as unknown as DefinitionDocumentProps }

export interface DefinitionDocumentProps {
    language: Value<string>;
    text: Value<string>;
}