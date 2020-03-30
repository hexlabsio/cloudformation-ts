import { Value } from '../../../kloudformation/Value';

export function lBCookieStickinessPolicyProps(lBCookieStickinessPolicyPropsProps: LBCookieStickinessPolicyProps): LBCookieStickinessPolicyProps { return (lBCookieStickinessPolicyPropsProps) as unknown as LBCookieStickinessPolicyProps }

export interface LBCookieStickinessPolicyProps {
    cookieExpirationPeriod?: Value<string>;
    policyName?: Value<string>;
}