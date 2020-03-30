import { Value } from '../../kloudformation/Value';
import { VariantPropertyProps } from './endpoint/VariantPropertyProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function endpoint(endpointProps: Endpoint & { logicalName?: string }): Endpoint { return ({ ...endpointProps, _logicalType: 'AWS::SageMaker::Endpoint' }) as unknown as Endpoint }

export interface Endpoint extends KloudResource {
    endpointConfigName: Value<string>;
    retainAllVariantProperties?: Value<boolean>;
    endpointName?: Value<string>;
    excludeRetainedVariantProperties?: VariantPropertyProps[];
    tags?: Tag[];
}