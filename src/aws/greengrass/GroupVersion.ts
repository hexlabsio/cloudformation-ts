import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function groupVersion(groupVersionProps: GroupVersion & { logicalName?: string }): GroupVersion { return ({ ...groupVersionProps, _logicalType: 'AWS::Greengrass::GroupVersion' }) as unknown as GroupVersion }

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