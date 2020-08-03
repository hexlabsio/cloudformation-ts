import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function groupVersion(groupVersionProps: GroupVersion): GroupVersion { return ({ ...groupVersionProps, _logicalType: '' }) }
  
export interface GroupVersion extends KloudResource {
  loggerDefinitionVersionArn?: Value<string>
  deviceDefinitionVersionArn?: Value<string>
  functionDefinitionVersionArn?: Value<string>
  coreDefinitionVersionArn?: Value<string>
  resourceDefinitionVersionArn?: Value<string>
  connectorDefinitionVersionArn?: Value<string>
  subscriptionDefinitionVersionArn?: Value<string>
  groupId: Value<string>
}