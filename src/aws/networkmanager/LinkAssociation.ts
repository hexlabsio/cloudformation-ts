import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function linkAssociation(linkAssociationProps: LinkAssociation & { logicalName?: string }): LinkAssociation { return ({ ...linkAssociationProps, _logicalType: 'AWS::NetworkManager::LinkAssociation' }) as unknown as LinkAssociation }

export interface LinkAssociation extends KloudResource {
    globalNetworkId: Value<string>;
    deviceId: Value<string>;
    linkId: Value<string>;
}