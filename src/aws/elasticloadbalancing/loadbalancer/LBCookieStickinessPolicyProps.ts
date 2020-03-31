import { Value } from '../../../kloudformation/Value';

export function lBCookieStickinessPolicyProps(lBCookieStickinessPolicyPropsProps: LBCookieStickinessPolicyProps): LBCookieStickinessPolicyProps { return (lBCookieStickinessPolicyPropsProps) }

export interface LBCookieStickinessPolicyProps {
    cookieExpirationPeriod?: Value<string>;
    policyName?: Value<string>;
}