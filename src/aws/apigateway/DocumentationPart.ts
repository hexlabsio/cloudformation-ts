import { LocationProps } from './documentationpart/LocationProps';
import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DocumentationPartAttributes = {  }
export function documentationPart(documentationPartProps: DocumentationPart): DocumentationPart & { attributes: DocumentationPartAttributes } { return ({ ...documentationPartProps, _logicalType: 'AWS::ApiGateway::DocumentationPart', attributes: {  } }) }

export interface DocumentationPart extends KloudResource {
    location: LocationProps;
    properties: Value<string>;
    restApiId: Value<string>;
}