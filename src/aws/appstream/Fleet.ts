import { ComputeCapacityProps } from './fleet/ComputeCapacityProps';
import { Value } from '../../kloudformation/Value';
import { VpcConfigProps } from './fleet/VpcConfigProps';
import { DomainJoinInfoProps } from './fleet/DomainJoinInfoProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function fleet(fleetProps: Fleet & { logicalName?: string }): Fleet { return ({ ...fleetProps, _logicalType: 'AWS::AppStream::Fleet' }) as unknown as Fleet }

export interface Fleet extends KloudResource {
    computeCapacity: ComputeCapacityProps;
    name: Value<string>;
    instanceType: Value<string>;
    description?: Value<string>;
    vpcConfig?: VpcConfigProps;
    fleetType?: Value<string>;
    enableDefaultInternetAccess?: Value<boolean>;
    domainJoinInfo?: DomainJoinInfoProps;
    imageName?: Value<string>;
    maxUserDurationInSeconds?: Value<number>;
    idleDisconnectTimeoutInSeconds?: Value<number>;
    disconnectTimeoutInSeconds?: Value<number>;
    displayName?: Value<string>;
    tags?: Tag[];
    imageArn?: Value<string>;
}