import { DefaultConfigProps } from './DefaultConfigProps';
import { FunctionProps } from './FunctionProps';

export interface FunctionDefinitionVersionProps {
  defaultConfig?: DefaultConfigProps
  functions: FunctionProps[]
}