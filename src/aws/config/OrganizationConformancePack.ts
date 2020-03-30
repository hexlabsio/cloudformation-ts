import { Value } from '../../kloudformation/Value';
import { ConformancePackInputParameterProps } from './organizationconformancepack/ConformancePackInputParameterProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function organizationConformancePack(organizationConformancePackProps: OrganizationConformancePack & { logicalName?: string }): OrganizationConformancePack { return ({ ...organizationConformancePackProps, _logicalType: 'AWS::Config::OrganizationConformancePack' }) as unknown as OrganizationConformancePack }

export interface OrganizationConformancePack extends KloudResource {
    organizationConformancePackName: Value<string>;
    deliveryS3Bucket: Value<string>;
    templateS3Uri?: Value<string>;
    templateBody?: Value<string>;
    deliveryS3KeyPrefix?: Value<string>;
    conformancePackInputParameters?: ConformancePackInputParameterProps[];
    excludedAccounts?: Value<Value<string>[]>;
}