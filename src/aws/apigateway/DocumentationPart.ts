import { LocationProps } from './documentationpart/LocationProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function documentationPart(documentationPartProps: DocumentationPart & { logicalName?: string }): DocumentationPart { return ({ ...documentationPartProps, _logicalType: 'AWS::ApiGateway::DocumentationPart' }) as unknown as DocumentationPart }

export interface DocumentationPart extends KloudResource {
    location: LocationProps;
    properties: Value<string>;
    restApiId: Value<string>;
}