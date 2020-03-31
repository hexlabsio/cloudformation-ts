import { Value } from '../../kloudformation/Value';
import { OptionConfigurationProps } from './optiongroup/OptionConfigurationProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type OptionGroupAttributes = {  }
export function optionGroup(optionGroupProps: OptionGroup): OptionGroup & { attributes: OptionGroupAttributes } { return ({ ...optionGroupProps, _logicalType: 'AWS::RDS::OptionGroup', attributes: {  } }) }

export interface OptionGroup extends KloudResource {
    engineName: Value<string>;
    majorEngineVersion: Value<string>;
    optionConfigurations: OptionConfigurationProps[];
    optionGroupDescription: Value<string>;
    tags?: Tag[];
}