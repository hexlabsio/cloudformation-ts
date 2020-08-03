import { Value } from '../../kloudformation/Value';
import { OptionConfigurationProps } from './optionGroup/OptionConfigurationProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
export function optionGroup(optionGroupProps: OptionGroup): OptionGroup { return ({ ...optionGroupProps, _logicalType: '' }) }
  
export interface OptionGroup extends KloudResource {
  engineName: Value<string>
  majorEngineVersion: Value<string>
  optionConfigurations: OptionConfigurationProps[]
  optionGroupDescription: Value<string>
  tags?: Tag[]
}