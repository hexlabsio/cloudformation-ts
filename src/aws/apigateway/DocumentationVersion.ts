import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function documentationVersion(documentationVersionProps: DocumentationVersion & { logicalName?: string }): DocumentationVersion { return ({ ...documentationVersionProps, _logicalType: 'AWS::ApiGateway::DocumentationVersion' }) as unknown as DocumentationVersion }

export interface DocumentationVersion extends KloudResource {
    documentationVersion: Value<string>;
    restApiId: Value<string>;
    description?: Value<string>;
}