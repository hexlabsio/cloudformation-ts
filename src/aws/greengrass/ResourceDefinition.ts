import { Value } from '../../kloudformation/Value';
import { ResourceDefinitionVersionProps } from './resourcedefinition/ResourceDefinitionVersionProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type ResourceDefinitionAttributes = { LatestVersionArn: Attribute<string>; Id: Attribute<string>; Arn: Attribute<string>; Name: Attribute<string> }
export function resourceDefinition(resourceDefinitionProps: ResourceDefinition): ResourceDefinition & { attributes: ResourceDefinitionAttributes } { return ({ ...resourceDefinitionProps, _logicalType: 'AWS::Greengrass::ResourceDefinition', attributes: { LatestVersionArn: 'LatestVersionArn', Id: 'Id', Arn: 'Arn', Name: 'Name' } }) }

export interface ResourceDefinition extends KloudResource {
    name: Value<string>;
    initialVersion?: ResourceDefinitionVersionProps;
    tags?: Value<any>;
}