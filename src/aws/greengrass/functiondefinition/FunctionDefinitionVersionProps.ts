import { FunctionProps } from '../functiondefinitionversion/FunctionProps';
import { DefaultConfigProps } from '../functiondefinitionversion/DefaultConfigProps';

export function functionDefinitionVersionProps(functionDefinitionVersionPropsProps: FunctionDefinitionVersionProps): FunctionDefinitionVersionProps { return (functionDefinitionVersionPropsProps) }

export interface FunctionDefinitionVersionProps {
    functions: FunctionProps[];
    defaultConfig?: DefaultConfigProps;
}