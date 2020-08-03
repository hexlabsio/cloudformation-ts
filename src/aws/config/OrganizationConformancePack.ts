import { Value } from '../../kloudformation/Value';
import { ConformancePackInputParameterProps } from './organizationConformancePack/ConformancePackInputParameterProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function organizationConformancePack(organizationConformancePackProps: OrganizationConformancePack): OrganizationConformancePack { return ({ ...organizationConformancePackProps, _logicalType: '' }) }
  
export interface OrganizationConformancePack extends KloudResource {
  organizationConformancePackName: Value<string>
  templateS3Uri?: Value<string>
  templateBody?: Value<string>
  deliveryS3Bucket: Value<string>
  deliveryS3KeyPrefix?: Value<string>
  conformancePackInputParameters?: ConformancePackInputParameterProps[]
  excludedAccounts?: Value<Value<string>[]>
}