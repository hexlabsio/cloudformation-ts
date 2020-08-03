import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function sourceCredential(sourceCredentialProps: SourceCredential): SourceCredential { return ({ ...sourceCredentialProps, _logicalType: '' }) }
  
export interface SourceCredential extends KloudResource {
  serverType: Value<string>
  username?: Value<string>
  token: Value<string>
  authType: Value<string>
}