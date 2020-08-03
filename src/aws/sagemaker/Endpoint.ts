import { Value } from '../../kloudformation/Value';
import { VariantPropertyProps } from './endpoint/VariantPropertyProps';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type EndpointAttributes = { EndpointName: Attribute<string> }
export function endpoint(endpointProps: Endpoint): Endpoint & {attributes: EndpointAttributes} { return ({ ...endpointProps, _logicalType: 'AWS::SageMaker::Endpoint', attributes: { EndpointName: 'EndpointName' } }) }
   
export interface Endpoint extends KloudResource {
  retainAllVariantProperties?: Value<boolean>
  endpointName?: Value<string>
  excludeRetainedVariantProperties?: VariantPropertyProps[]
  endpointConfigName: Value<string>
  tags?: Tag[]
}