import { Value } from '../../../kloudformation/Value';

export interface LBCookieStickinessPolicyProps {
  cookieExpirationPeriod?: Value<string>
  policyName?: Value<string>
}