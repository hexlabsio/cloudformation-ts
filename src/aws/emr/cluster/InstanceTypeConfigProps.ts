import { Value } from '../../../kloudformation/Value';
import { ConfigurationProps } from './ConfigurationProps';
import { EbsConfigurationProps } from './EbsConfigurationProps';

export interface InstanceTypeConfigProps {
  bidPrice?: Value<string>
  bidPriceAsPercentageOfOnDemandPrice?: Value<number>
  configurations?: ConfigurationProps[]
  ebsConfiguration?: EbsConfigurationProps
  instanceType: Value<string>
  weightedCapacity?: Value<number>
}