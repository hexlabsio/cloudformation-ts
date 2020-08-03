import { Value } from '../../../kloudformation/Value';

export interface SmsConfigurationProps {
  externalId?: Value<string>
  snsCallerArn?: Value<string>
}