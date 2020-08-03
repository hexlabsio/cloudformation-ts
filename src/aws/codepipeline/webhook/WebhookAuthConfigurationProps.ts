import { Value } from '../../../kloudformation/Value';

export interface WebhookAuthConfigurationProps {
  allowedIPRange?: Value<string>
  secretToken?: Value<string>
}