import { Value } from '../../../kloudformation/Value';
import { AuthorizationConfigProps } from './AuthorizationConfigProps';

export interface HttpConfigProps {
  endpoint: Value<string>
  authorizationConfig?: AuthorizationConfigProps
}