import { Value } from '../../kloudformation/Value';
import { TagsEntryProps } from './configuration/TagsEntryProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ConfigurationAttributes = { Revision: Attribute<number>;Id: Attribute<string>;Arn: Attribute<string> }
export function configuration(configurationProps: Configuration): Configuration & {attributes: ConfigurationAttributes} { return ({ ...configurationProps, _logicalType: 'AWS::AmazonMQ::Configuration', attributes: { Revision: 'Revision',Id: 'Id',Arn: 'Arn' } }) }
   
export interface Configuration extends KloudResource {
  engineVersion: Value<string>
  description?: Value<string>
  engineType: Value<string>
  data: Value<string>
  tags?: TagsEntryProps[]
  name: Value<string>
}