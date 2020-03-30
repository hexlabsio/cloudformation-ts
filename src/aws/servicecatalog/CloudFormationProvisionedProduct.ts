import { Value } from '../../kloudformation/Value';
import { ProvisioningParameterProps } from './cloudformationprovisionedproduct/ProvisioningParameterProps';
import { ProvisioningPreferencesProps } from './cloudformationprovisionedproduct/ProvisioningPreferencesProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function cloudFormationProvisionedProduct(cloudFormationProvisionedProductProps: CloudFormationProvisionedProduct & { logicalName?: string }): CloudFormationProvisionedProduct { return ({ ...cloudFormationProvisionedProductProps, _logicalType: 'AWS::ServiceCatalog::CloudFormationProvisionedProduct' }) as unknown as CloudFormationProvisionedProduct }

export interface CloudFormationProvisionedProduct extends KloudResource {
    pathId?: Value<string>;
    provisioningParameters?: ProvisioningParameterProps[];
    provisioningPreferences?: ProvisioningPreferencesProps;
    productName?: Value<string>;
    provisioningArtifactName?: Value<string>;
    notificationArns?: Value<Value<string>[]>;
    acceptLanguage?: Value<string>;
    productId?: Value<string>;
    tags?: Tag[];
    provisionedProductName?: Value<string>;
    provisioningArtifactId?: Value<string>;
}