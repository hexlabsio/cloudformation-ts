import { Value } from '../../../kloudformation/Value';

export function appCookieStickinessPolicyProps(appCookieStickinessPolicyPropsProps: AppCookieStickinessPolicyProps): AppCookieStickinessPolicyProps { return (appCookieStickinessPolicyPropsProps) as unknown as AppCookieStickinessPolicyProps }

export interface AppCookieStickinessPolicyProps {
    cookieName: Value<string>;
    policyName: Value<string>;
}