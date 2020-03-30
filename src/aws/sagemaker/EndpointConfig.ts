import { ProductionVariantProps } from './endpointconfig/ProductionVariantProps';
import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function endpointConfig(endpointConfigProps: EndpointConfig & { logicalName?: string }): EndpointConfig { return ({ ...endpointConfigProps, _logicalType: 'AWS::SageMaker::EndpointConfig' }) as unknown as EndpointConfig }

export interface EndpointConfig extends KloudResource {
    productionVariants: ProductionVariantProps[];
    kmsKeyId?: Value<string>;
    endpointConfigName?: Value<string>;
    tags?: Tag[];
}