import { ComputeCapacityProps } from './fleet/ComputeCapacityProps';
import { Value } from '../../kloudformation/Value';
import { VpcConfigProps } from './fleet/VpcConfigProps';
import { DomainJoinInfoProps } from './fleet/DomainJoinInfoProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export type FleetAttributes = {  }
export function fleet(fleetProps: Fleet): Fleet & { attributes: FleetAttributes } { return ({ ...fleetProps, _logicalType: 'AWS::AppStream::Fleet', attributes: {  } }) }

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