import { Value } from '../../../kloudformation/Value';

export interface RedirectRuleProps {
  hostName?: Value<string>
  httpRedirectCode?: Value<string>
  protocol?: Value<string>
  replaceKeyPrefixWith?: Value<string>
  replaceKeyWith?: Value<string>
}