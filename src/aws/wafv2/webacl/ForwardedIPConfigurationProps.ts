import { Value } from '../../../kloudformation/Value';

export interface ForwardedIPConfigurationProps {
  headerName: Value<string>
  fallbackBehavior: Value<string>
}