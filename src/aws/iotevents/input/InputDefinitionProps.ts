import { AttributeProps } from './AttributeProps';

export function inputDefinitionProps(inputDefinitionPropsProps: InputDefinitionProps): InputDefinitionProps { return (inputDefinitionPropsProps) as unknown as InputDefinitionProps }

export interface InputDefinitionProps {
    attributes?: AttributeProps[];
}