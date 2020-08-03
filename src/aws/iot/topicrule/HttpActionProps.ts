import { HttpAuthorizationProps } from './HttpAuthorizationProps';
import { Value } from '../../../kloudformation/Value';
import { HttpActionHeaderProps } from './HttpActionHeaderProps';

export interface HttpActionProps {
  auth?: HttpAuthorizationProps
  confirmationUrl?: Value<string>
  headers?: HttpActionHeaderProps[]
  url: Value<string>
}