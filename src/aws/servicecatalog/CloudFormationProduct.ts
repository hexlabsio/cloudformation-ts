import { Value } from '../../kloudformation/Value';
import { ProvisioningArtifactPropertiesProps } from './cloudformationproduct/ProvisioningArtifactPropertiesProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function cloudFormationProduct(cloudFormationProductProps: CloudFormationProduct & { logicalName?: string }): CloudFormationProduct { return ({ ...cloudFormationProductProps, _logicalType: 'AWS::ServiceCatalog::CloudFormationProduct' }) as unknown as CloudFormationProduct }

export interface CloudFormationProduct extends KloudResource {
    owner: Value<string>;
    name: Value<string>;
    provisioningArtifactParameters: ProvisioningArtifactPropertiesProps[];
    supportDescription?: Value<string>;
    description?: Value<string>;
    distributor?: Value<string>;
    supportEmail?: Value<string>;
    acceptLanguage?: Value<string>;
    supportUrl?: Value<string>;
    tags?: Tag[];
}