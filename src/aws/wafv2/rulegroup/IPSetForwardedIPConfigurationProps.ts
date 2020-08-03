import { Value } from '../../../kloudformation/Value';

export interface IPSetForwardedIPConfigurationProps {
  headerName: Value<string>
  fallbackBehavior: Value<string>
  position: Value<string>
}