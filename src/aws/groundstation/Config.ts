import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ConfigAttributes = { Type: Attribute<string>;Arn: Attribute<string>;Id: Attribute<string> }
export function config(configProps: Config): Config & {attributes: ConfigAttributes} { return ({ ...configProps, _logicalType: 'AWS::GroundStation::Config', attributes: { Type: 'Type',Arn: 'Arn',Id: 'Id' } }) }
   
export interface Config extends KloudResource {
  name: Value<string>
  tags?: Tag[]
  configData: Value<any>
}