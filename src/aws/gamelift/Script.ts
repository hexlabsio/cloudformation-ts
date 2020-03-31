import { S3LocationProps } from './script/S3LocationProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type ScriptAttributes = { Id: Attribute<string>; Arn: Attribute<string> }
export function script(scriptProps: Script): Script & { attributes: ScriptAttributes } { return ({ ...scriptProps, _logicalType: 'AWS::GameLift::Script', attributes: { Id: 'Id', Arn: 'Arn' } }) }

export interface Script extends KloudResource {
    storageLocation: S3LocationProps;
    version?: Value<string>;
    name?: Value<string>;
}