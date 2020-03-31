import { Value } from '../../../kloudformation/Value';

export function redirectRuleProps(redirectRulePropsProps: RedirectRuleProps): RedirectRuleProps { return (redirectRulePropsProps) }

export interface RedirectRuleProps {
    hostName?: Value<string>;
    httpRedirectCode?: Value<string>;
    protocol?: Value<string>;
    replaceKeyPrefixWith?: Value<string>;
    replaceKeyWith?: Value<string>;
}