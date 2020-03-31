import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DocumentationVersionAttributes = {  }
export function documentationVersion(documentationVersionProps: DocumentationVersion): DocumentationVersion & { attributes: DocumentationVersionAttributes } { return ({ ...documentationVersionProps, _logicalType: 'AWS::ApiGateway::DocumentationVersion', attributes: {  } }) }

export interface DocumentationVersion extends KloudResource {
    documentationVersion: Value<string>;
    restApiId: Value<string>;
    description?: Value<string>;
}