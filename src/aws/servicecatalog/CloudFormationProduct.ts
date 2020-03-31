import { Value } from '../../kloudformation/Value';
import { ProvisioningArtifactPropertiesProps } from './cloudformationproduct/ProvisioningArtifactPropertiesProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type CloudFormationProductAttributes = { ProductName: Attribute<string>; ProvisioningArtifactIds: Attribute<string>; ProvisioningArtifactNames: Attribute<string> }
export function cloudFormationProduct(cloudFormationProductProps: CloudFormationProduct): CloudFormationProduct & { attributes: CloudFormationProductAttributes } { return ({ ...cloudFormationProductProps, _logicalType: 'AWS::ServiceCatalog::CloudFormationProduct', attributes: { ProductName: 'ProductName', ProvisioningArtifactIds: 'ProvisioningArtifactIds', ProvisioningArtifactNames: 'ProvisioningArtifactNames' } }) }

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