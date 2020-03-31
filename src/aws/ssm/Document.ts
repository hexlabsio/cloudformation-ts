import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type DocumentAttributes = {  }
export function document(documentProps: Document): Document & { attributes: DocumentAttributes } { return ({ ...documentProps, _logicalType: 'AWS::SSM::Document', attributes: {  } }) }

export interface Document extends KloudResource {
    content: Value<any>;
    documentType?: Value<string>;
    name?: Value<string>;
    tags?: Tag[];
}