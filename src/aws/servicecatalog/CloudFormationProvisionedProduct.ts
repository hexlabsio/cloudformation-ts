import { Value } from '../../kloudformation/Value';
import { ProvisioningParameterProps } from './cloudFormationProvisionedProduct/ProvisioningParameterProps';
import { ProvisioningPreferencesProps } from './cloudFormationProvisionedProduct/ProvisioningPreferencesProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type CloudFormationProvisionedProductAttributes = { ProvisionedProductId: Attribute<string>;RecordId: Attribute<string>;CloudformationStackArn: Attribute<string>;Outputs: Attribute<{ [key: string]: string }> }
export function cloudFormationProvisionedProduct(cloudFormationProvisionedProductProps: CloudFormationProvisionedProduct): CloudFormationProvisionedProduct & {attributes: CloudFormationProvisionedProductAttributes} { return ({ ...cloudFormationProvisionedProductProps, _logicalType: 'AWS::ServiceCatalog::CloudFormationProvisionedProduct', attributes: { ProvisionedProductId: 'ProvisionedProductId',RecordId: 'RecordId',CloudformationStackArn: 'CloudformationStackArn',Outputs: 'Outputs' } }) }
   
export interface CloudFormationProvisionedProduct extends KloudResource {
  acceptLanguage?: Value<string>
  notificationArns?: Value<Value<string>[]>
  pathId?: Value<string>
  productId?: Value<string>
  productName?: Value<string>
  provisionedProductName?: Value<string>
  provisioningArtifactId?: Value<string>
  provisioningArtifactName?: Value<string>
  provisioningParameters?: ProvisioningParameterProps[]
  provisioningPreferences?: ProvisioningPreferencesProps
  tags?: Tag[]
}