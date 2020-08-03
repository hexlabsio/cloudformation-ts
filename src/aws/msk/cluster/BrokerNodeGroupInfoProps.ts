import { Value } from '../../../kloudformation/Value';
import { StorageInfoProps } from './StorageInfoProps';

export interface BrokerNodeGroupInfoProps {
  securityGroups?: Value<Value<string>[]>
  clientSubnets: Value<Value<string>[]>
  storageInfo?: StorageInfoProps
  brokerAZDistribution?: Value<string>
  instanceType: Value<string>
}