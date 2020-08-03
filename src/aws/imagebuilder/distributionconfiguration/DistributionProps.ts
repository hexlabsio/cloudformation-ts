import { Value } from '../../../kloudformation/Value';

export interface DistributionProps {
  region: Value<string>
  amiDistributionConfiguration?: Value<any>
  licenseConfigurationArns?: Value<Value<string>[]>
}