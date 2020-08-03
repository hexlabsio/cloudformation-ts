import { AuthenticateCognitoConfigProps } from './AuthenticateCognitoConfigProps';
import { AuthenticateOidcConfigProps } from './AuthenticateOidcConfigProps';
import { FixedResponseConfigProps } from './FixedResponseConfigProps';
import { ForwardConfigProps } from './ForwardConfigProps';
import { Value } from '../../../kloudformation/Value';
import { RedirectConfigProps } from './RedirectConfigProps';

export interface ActionProps {
  authenticateCognitoConfig?: AuthenticateCognitoConfigProps
  authenticateOidcConfig?: AuthenticateOidcConfigProps
  fixedResponseConfig?: FixedResponseConfigProps
  forwardConfig?: ForwardConfigProps
  order?: Value<number>
  redirectConfig?: RedirectConfigProps
  targetGroupArn?: Value<string>
  type: Value<string>
}