import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type GroupVersionAttributes = {  }
export function groupVersion(groupVersionProps: GroupVersion): GroupVersion & { attributes: GroupVersionAttributes } { return ({ ...groupVersionProps, _logicalType: 'AWS::Greengrass::GroupVersion', attributes: {  } }) }

export interface GroupVersion extends KloudResource {
    groupId: Value<string>;
    loggerDefinitionVersionArn?: Value<string>;
    deviceDefinitionVersionArn?: Value<string>;
    functionDefinitionVersionArn?: Value<string>;
    coreDefinitionVersionArn?: Value<string>;
    resourceDefinitionVersionArn?: Value<string>;
    connectorDefinitionVersionArn?: Value<string>;
    subscriptionDefinitionVersionArn?: Value<string>;
}