import { Value } from '../../kloudformation/Value';
import { DistributionProps } from './distributionConfiguration/DistributionProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type DistributionConfigurationAttributes = { Arn: Attribute<string> }
export function distributionConfiguration(distributionConfigurationProps: DistributionConfiguration): DistributionConfiguration & {attributes: DistributionConfigurationAttributes} { return ({ ...distributionConfigurationProps, _logicalType: 'AWS::ImageBuilder::DistributionConfiguration', attributes: { Arn: 'Arn' } }) }
   
export interface DistributionConfiguration extends KloudResource {
  name: Value<string>
  description?: Value<string>
  distributions: DistributionProps[]
  tags?: Value<Value<string>[]>
}