import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type LinkAssociationAttributes = {  }
export function linkAssociation(linkAssociationProps: LinkAssociation): LinkAssociation & { attributes: LinkAssociationAttributes } { return ({ ...linkAssociationProps, _logicalType: 'AWS::NetworkManager::LinkAssociation', attributes: {  } }) }

export interface LinkAssociation extends KloudResource {
    globalNetworkId: Value<string>;
    deviceId: Value<string>;
    linkId: Value<string>;
}