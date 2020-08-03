import { Value } from '../../../kloudformation/Value';

export interface GroupVersionProps {
  loggerDefinitionVersionArn?: Value<string>
  deviceDefinitionVersionArn?: Value<string>
  functionDefinitionVersionArn?: Value<string>
  coreDefinitionVersionArn?: Value<string>
  resourceDefinitionVersionArn?: Value<string>
  connectorDefinitionVersionArn?: Value<string>
  subscriptionDefinitionVersionArn?: Value<string>
}