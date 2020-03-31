import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type ConfigAttributes = { Type: Attribute<string>; Arn: Attribute<string>; Id: Attribute<string> }
export function config(configProps: Config): Config & { attributes: ConfigAttributes } { return ({ ...configProps, _logicalType: 'AWS::GroundStation::Config', attributes: { Type: 'Type', Arn: 'Arn', Id: 'Id' } }) }

export interface Config extends KloudResource {
    name: Value<string>;
    configData: Value<any>;
    tags?: Tag[];
}