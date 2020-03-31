import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type GlobalNetworkAttributes = { Arn: Attribute<string>; Id: Attribute<string> }
export function globalNetwork(globalNetworkProps: GlobalNetwork): GlobalNetwork & { attributes: GlobalNetworkAttributes } { return ({ ...globalNetworkProps, _logicalType: 'AWS::NetworkManager::GlobalNetwork', attributes: { Arn: 'Arn', Id: 'Id' } }) }

export interface GlobalNetwork extends KloudResource {
    description?: Value<string>;
    tags?: Tag[];
}