import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function document(documentProps: Document & { logicalName?: string }): Document { return ({ ...documentProps, _logicalType: 'AWS::SSM::Document' }) as unknown as Document }

export interface Document extends KloudResource {
    content: Value<any>;
    documentType?: Value<string>;
    name?: Value<string>;
    tags?: Tag[];
}