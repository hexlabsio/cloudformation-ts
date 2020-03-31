import { ProductionVariantProps } from './endpointconfig/ProductionVariantProps';
import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type EndpointConfigAttributes = { EndpointConfigName: Attribute<string> }
export function endpointConfig(endpointConfigProps: EndpointConfig): EndpointConfig & { attributes: EndpointConfigAttributes } { return ({ ...endpointConfigProps, _logicalType: 'AWS::SageMaker::EndpointConfig', attributes: { EndpointConfigName: 'EndpointConfigName' } }) }

export interface EndpointConfig extends KloudResource {
    productionVariants: ProductionVariantProps[];
    kmsKeyId?: Value<string>;
    endpointConfigName?: Value<string>;
    tags?: Tag[];
}