import { Value } from '../../kloudformation/Value';
import { ConfigurationIdProps } from './broker/ConfigurationIdProps';
import { MaintenanceWindowProps } from './broker/MaintenanceWindowProps';
import { LdapMetadataProps } from './broker/LdapMetadataProps';
import { UserProps } from './broker/UserProps';
import { LogListProps } from './broker/LogListProps';
import { LdapServerMetadataProps } from './broker/LdapServerMetadataProps';
import { EncryptionOptionsProps } from './broker/EncryptionOptionsProps';
import { TagsEntryProps } from './broker/TagsEntryProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type BrokerAttributes = { IpAddresses: Attribute<string[]>;OpenWireEndpoints: Attribute<string[]>;ConfigurationRevision: Attribute<number>;StompEndpoints: Attribute<string[]>;MqttEndpoints: Attribute<string[]>;AmqpEndpoints: Attribute<string[]>;Arn: Attribute<string>;ConfigurationId: Attribute<string>;WssEndpoints: Attribute<string[]> }
export function broker(brokerProps: Broker): Broker & {attributes: BrokerAttributes} { return ({ ...brokerProps, _logicalType: 'AWS::AmazonMQ::Broker', attributes: { IpAddresses: 'IpAddresses',OpenWireEndpoints: 'OpenWireEndpoints',ConfigurationRevision: 'ConfigurationRevision',StompEndpoints: 'StompEndpoints',MqttEndpoints: 'MqttEndpoints',AmqpEndpoints: 'AmqpEndpoints',Arn: 'Arn',ConfigurationId: 'ConfigurationId',WssEndpoints: 'WssEndpoints' } }) }
   
export interface Broker extends KloudResource {
  securityGroups?: Value<Value<string>[]>
  storageType?: Value<string>
  engineVersion: Value<string>
  configuration?: ConfigurationIdProps
  authenticationStrategy?: Value<string>
  maintenanceWindowStartTime?: MaintenanceWindowProps
  ldapMetadata?: LdapMetadataProps
  hostInstanceType: Value<string>
  autoMinorVersionUpgrade: Value<boolean>
  users: UserProps[]
  logs?: LogListProps
  subnetIds?: Value<Value<string>[]>
  brokerName: Value<string>
  ldapServerMetadata?: LdapServerMetadataProps
  deploymentMode: Value<string>
  engineType: Value<string>
  publiclyAccessible: Value<boolean>
  encryptionOptions?: EncryptionOptionsProps
  tags?: TagsEntryProps[]
}