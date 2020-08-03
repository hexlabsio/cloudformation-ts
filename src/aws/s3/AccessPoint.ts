import { Value } from '../../kloudformation/Value';
import { VpcConfigurationProps } from './accessPoint/VpcConfigurationProps';
import { PublicAccessBlockConfigurationProps } from './accessPoint/PublicAccessBlockConfigurationProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function accessPoint(accessPointProps: AccessPoint): AccessPoint { return ({ ...accessPointProps, _logicalType: '' }) }
  
export interface AccessPoint extends KloudResource {
  name?: Value<string>
  bucket: Value<string>
  vpcConfiguration?: VpcConfigurationProps
  publicAccessBlockConfiguration?: PublicAccessBlockConfigurationProps
  policy?: Value<any>
  policyStatus?: Value<any>
  networkOrigin?: Value<string>
  creationDate?: Value<string>
}