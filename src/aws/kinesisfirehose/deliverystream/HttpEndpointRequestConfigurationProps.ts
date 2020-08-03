import { Value } from '../../../kloudformation/Value';
import { HttpEndpointCommonAttributeProps } from './HttpEndpointCommonAttributeProps';

export interface HttpEndpointRequestConfigurationProps {
  contentEncoding?: Value<string>
  commonAttributes?: HttpEndpointCommonAttributeProps[]
}