import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { ProvisioningArtifactPropertiesProps } from './cloudFormationProduct/ProvisioningArtifactPropertiesProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type CloudFormationProductAttributes = { ProductName: Attribute<string>;ProvisioningArtifactIds: Attribute<string>;ProvisioningArtifactNames: Attribute<string> }
export function cloudFormationProduct(cloudFormationProductProps: CloudFormationProduct): CloudFormationProduct & {attributes: CloudFormationProductAttributes} { return ({ ...cloudFormationProductProps, _logicalType: 'AWS::ServiceCatalog::CloudFormationProduct', attributes: { ProductName: 'ProductName',ProvisioningArtifactIds: 'ProvisioningArtifactIds',ProvisioningArtifactNames: 'ProvisioningArtifactNames' } }) }
   
export interface CloudFormationProduct extends KloudResource {
  replaceProvisioningArtifacts?: Value<boolean>
  owner: Value<string>
  supportDescription?: Value<string>
  description?: Value<string>
  distributor?: Value<string>
  supportEmail?: Value<string>
  acceptLanguage?: Value<string>
  supportUrl?: Value<string>
  tags?: Tag[]
  name: Value<string>
  provisioningArtifactParameters: ProvisioningArtifactPropertiesProps[]
}