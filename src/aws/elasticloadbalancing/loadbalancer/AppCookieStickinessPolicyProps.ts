import { Value } from '../../../kloudformation/Value';

export function appCookieStickinessPolicyProps(appCookieStickinessPolicyPropsProps: AppCookieStickinessPolicyProps): AppCookieStickinessPolicyProps { return (appCookieStickinessPolicyPropsProps) }

export interface AppCookieStickinessPolicyProps {
    cookieName: Value<string>;
    policyName: Value<string>;
}