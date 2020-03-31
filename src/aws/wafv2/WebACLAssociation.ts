import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type WebACLAssociationAttributes = {  }
export function webACLAssociation(webACLAssociationProps: WebACLAssociation): WebACLAssociation & { attributes: WebACLAssociationAttributes } { return ({ ...webACLAssociationProps, _logicalType: 'AWS::WAFv2::WebACLAssociation', attributes: {  } }) }

export interface WebACLAssociation extends KloudResource {
    resourceArn: Value<string>;
    webACLArn: Value<string>;
}