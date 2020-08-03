import { Value } from '../../../kloudformation/Value';

export interface IdentityProviderDetailsProps {
  invocationRole: Value<string>
  url: Value<string>
}