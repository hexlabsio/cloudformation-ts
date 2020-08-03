import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
export function webACLAssociation(webACLAssociationProps: WebACLAssociation): WebACLAssociation { return ({ ...webACLAssociationProps, _logicalType: '' }) }
  
export interface WebACLAssociation extends KloudResource {
  resourceArn: Value<string>
  webACLId: Value<string>
}