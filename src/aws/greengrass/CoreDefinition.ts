import { Value } from '../../kloudformation/Value';
import { CoreDefinitionVersionProps } from './coredefinition/CoreDefinitionVersionProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type CoreDefinitionAttributes = { LatestVersionArn: Attribute<string>; Id: Attribute<string>; Arn: Attribute<string>; Name: Attribute<string> }
export function coreDefinition(coreDefinitionProps: CoreDefinition): CoreDefinition & { attributes: CoreDefinitionAttributes } { return ({ ...coreDefinitionProps, _logicalType: 'AWS::Greengrass::CoreDefinition', attributes: { LatestVersionArn: 'LatestVersionArn', Id: 'Id', Arn: 'Arn', Name: 'Name' } }) }

export interface CoreDefinition extends KloudResource {
    name: Value<string>;
    initialVersion?: CoreDefinitionVersionProps;
    tags?: Value<any>;
}