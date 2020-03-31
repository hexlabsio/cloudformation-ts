import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { LocationProps } from './device/LocationProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type DeviceAttributes = { DeviceArn: Attribute<string>; DeviceId: Attribute<string> }
export function device(deviceProps: Device): Device & { attributes: DeviceAttributes } { return ({ ...deviceProps, _logicalType: 'AWS::NetworkManager::Device', attributes: { DeviceArn: 'DeviceArn', DeviceId: 'DeviceId' } }) }

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