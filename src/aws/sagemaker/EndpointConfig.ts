import { DataCaptureConfigProps } from './endpointConfig/DataCaptureConfigProps';
import { ProductionVariantProps } from './endpointConfig/ProductionVariantProps';
import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type EndpointConfigAttributes = { EndpointConfigName: Attribute<string> }
export function endpointConfig(endpointConfigProps: EndpointConfig): EndpointConfig & {attributes: EndpointConfigAttributes} { return ({ ...endpointConfigProps, _logicalType: 'AWS::SageMaker::EndpointConfig', attributes: { EndpointConfigName: 'EndpointConfigName' } }) }
   
export interface EndpointConfig extends KloudResource {
  dataCaptureConfig?: DataCaptureConfigProps
  productionVariants: ProductionVariantProps[]
  kmsKeyId?: Value<string>
  endpointConfigName?: Value<string>
  tags?: Tag[]
}