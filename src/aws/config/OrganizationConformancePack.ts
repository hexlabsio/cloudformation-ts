import { Value } from '../../kloudformation/Value';
import { ConformancePackInputParameterProps } from './organizationconformancepack/ConformancePackInputParameterProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type OrganizationConformancePackAttributes = {  }
export function organizationConformancePack(organizationConformancePackProps: OrganizationConformancePack): OrganizationConformancePack & { attributes: OrganizationConformancePackAttributes } { return ({ ...organizationConformancePackProps, _logicalType: 'AWS::Config::OrganizationConformancePack', attributes: {  } }) }

export interface OrganizationConformancePack extends KloudResource {
    organizationConformancePackName: Value<string>;
    deliveryS3Bucket: Value<string>;
    templateS3Uri?: Value<string>;
    templateBody?: Value<string>;
    deliveryS3KeyPrefix?: Value<string>;
    conformancePackInputParameters?: ConformancePackInputParameterProps[];
    excludedAccounts?: Value<Value<string>[]>;
}