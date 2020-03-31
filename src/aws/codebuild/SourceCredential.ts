import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type SourceCredentialAttributes = {  }
export function sourceCredential(sourceCredentialProps: SourceCredential): SourceCredential & { attributes: SourceCredentialAttributes } { return ({ ...sourceCredentialProps, _logicalType: 'AWS::CodeBuild::SourceCredential', attributes: {  } }) }

export interface SourceCredential extends KloudResource {
    serverType: Value<string>;
    token: Value<string>;
    authType: Value<string>;
    username?: Value<string>;
}