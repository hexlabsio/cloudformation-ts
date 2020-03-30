import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function webACLAssociation(webACLAssociationProps: WebACLAssociation & { logicalName?: string }): WebACLAssociation { return ({ ...webACLAssociationProps, _logicalType: 'AWS::WAFRegional::WebACLAssociation' }) as unknown as WebACLAssociation }

export interface WebACLAssociation extends KloudResource {
    resourceArn: Value<string>;
    webACLId: Value<string>;
}