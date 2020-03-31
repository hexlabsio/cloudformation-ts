import { Value } from '../../kloudformation/Value';
import { VariantPropertyProps } from './endpoint/VariantPropertyProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type EndpointAttributes = { EndpointName: Attribute<string> }
export function endpoint(endpointProps: Endpoint): Endpoint & { attributes: EndpointAttributes } { return ({ ...endpointProps, _logicalType: 'AWS::SageMaker::Endpoint', attributes: { EndpointName: 'EndpointName' } }) }

export interface Endpoint extends KloudResource {
    endpointConfigName: Value<string>;
    retainAllVariantProperties?: Value<boolean>;
    endpointName?: Value<string>;
    excludeRetainedVariantProperties?: VariantPropertyProps[];
    tags?: Tag[];
}