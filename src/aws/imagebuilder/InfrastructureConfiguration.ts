import { Value } from '../../kloudformation/Value';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type InfrastructureConfigurationAttributes = { Arn: Attribute<string> }
export function infrastructureConfiguration(infrastructureConfigurationProps: InfrastructureConfiguration): InfrastructureConfiguration & {attributes: InfrastructureConfigurationAttributes} { return ({ ...infrastructureConfigurationProps, _logicalType: 'AWS::ImageBuilder::InfrastructureConfiguration', attributes: { Arn: 'Arn' } }) }
   
export interface InfrastructureConfiguration extends KloudResource {
  name: Value<string>
  description?: Value<string>
  instanceTypes?: Value<Value<string>[]>
  securityGroupIds?: Value<Value<string>[]>
  logging?: Value<any>
  subnetId?: Value<string>
  keyPair?: Value<string>
  terminateInstanceOnFailure?: Value<boolean>
  instanceProfileName: Value<string>
  snsTopicArn?: Value<string>
  resourceTags?: Value<Value<string>[]>
  tags?: Value<Value<string>[]>
}