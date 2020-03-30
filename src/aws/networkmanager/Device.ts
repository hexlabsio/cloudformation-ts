import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { LocationProps } from './device/LocationProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function device(deviceProps: Device & { logicalName?: string }): Device { return ({ ...deviceProps, _logicalType: 'AWS::NetworkManager::Device' }) as unknown as Device }

export interface Device extends KloudResource {
    globalNetworkId: Value<string>;
    description?: Value<string>;
    tags?: Tag[];
    location?: LocationProps;
    model?: Value<string>;
    serialNumber?: Value<string>;
    siteId?: Value<string>;
    type?: Value<string>;
    vendor?: Value<string>;
}