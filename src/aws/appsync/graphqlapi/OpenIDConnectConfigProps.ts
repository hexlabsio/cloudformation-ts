import { Value } from '../../../kloudformation/Value';

export interface OpenIDConnectConfigProps {
  issuer?: Value<string>
  clientId?: Value<string>
  authTTL?: Value<number>
  iatTTL?: Value<number>
}