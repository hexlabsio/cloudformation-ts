import { BrokerNodeGroupInfoProps } from './cluster/BrokerNodeGroupInfoProps';
import { Value } from '../../kloudformation/Value';
import { EncryptionInfoProps } from './cluster/EncryptionInfoProps';
import { OpenMonitoringProps } from './cluster/OpenMonitoringProps';
import { ClientAuthenticationProps } from './cluster/ClientAuthenticationProps';
import { LoggingInfoProps } from './cluster/LoggingInfoProps';
import { ConfigurationInfoProps } from './cluster/ConfigurationInfoProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function cluster(clusterProps: Cluster): Cluster { return ({ ...clusterProps, _logicalType: '' }) }
  
export interface Cluster extends KloudResource {
  brokerNodeGroupInfo: BrokerNodeGroupInfoProps
  enhancedMonitoring?: Value<string>
  kafkaVersion: Value<string>
  numberOfBrokerNodes: Value<number>
  encryptionInfo?: EncryptionInfoProps
  openMonitoring?: OpenMonitoringProps
  clusterName: Value<string>
  clientAuthentication?: ClientAuthenticationProps
  loggingInfo?: LoggingInfoProps
  tags?: Value<any>
  configurationInfo?: ConfigurationInfoProps
}