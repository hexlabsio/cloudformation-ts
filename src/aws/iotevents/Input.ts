import { InputDefinitionProps } from './input/InputDefinitionProps';
import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type InputAttributes = {  }
export function input(inputProps: Input): Input & { attributes: InputAttributes } { return ({ ...inputProps, _logicalType: 'AWS::IoTEvents::Input', attributes: {  } }) }

export interface Input extends KloudResource {
    inputDefinition?: InputDefinitionProps;
    inputName?: Value<string>;
    inputDescription?: Value<string>;
    tags?: Tag[];
}