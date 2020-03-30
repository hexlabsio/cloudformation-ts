import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function sourceCredential(sourceCredentialProps: SourceCredential & { logicalName?: string }): SourceCredential { return ({ ...sourceCredentialProps, _logicalType: 'AWS::CodeBuild::SourceCredential' }) as unknown as SourceCredential }

export interface SourceCredential extends KloudResource {
    serverType: Value<string>;
    token: Value<string>;
    authType: Value<string>;
    username?: Value<string>;
}