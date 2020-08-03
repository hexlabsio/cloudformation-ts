import { InputDefinitionProps } from './input/InputDefinitionProps';
import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function input(inputProps: Input): Input { return ({ ...inputProps, _logicalType: '' }) }
  
export interface Input extends KloudResource {
  inputDefinition?: InputDefinitionProps
  inputName?: Value<string>
  inputDescription?: Value<string>
  tags?: Tag[]
}