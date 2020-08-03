import { Value } from '../../../kloudformation/Value';
import { ForwardedIPConfigurationProps } from './ForwardedIPConfigurationProps';

export interface GeoMatchStatementProps {
  countryCodes?: Value<Value<string>[]>
  forwardedIPConfig?: ForwardedIPConfigurationProps
}