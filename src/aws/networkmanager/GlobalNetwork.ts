import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function globalNetwork(globalNetworkProps: GlobalNetwork & { logicalName?: string }): GlobalNetwork { return ({ ...globalNetworkProps, _logicalType: 'AWS::NetworkManager::GlobalNetwork' }) as unknown as GlobalNetwork }

export interface GlobalNetwork extends KloudResource {
    description?: Value<string>;
    tags?: Tag[];
}