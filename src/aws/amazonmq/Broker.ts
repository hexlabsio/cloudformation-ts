import { Value } from '../../kloudformation/Value';
import { UserProps } from './broker/UserProps';
import { ConfigurationIdProps } from './broker/ConfigurationIdProps';
import { MaintenanceWindowProps } from './broker/MaintenanceWindowProps';
import { LogListProps } from './broker/LogListProps';
import { EncryptionOptionsProps } from './broker/EncryptionOptionsProps';
import { TagsEntryProps } from './broker/TagsEntryProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type BrokerAttributes = { IpAddresses: Attribute<Value<string>[]>; OpenWireEndpoints: Attribute<Value<string>[]>; ConfigurationRevision: Attribute<number>; StompEndpoints: Attribute<Value<string>[]>; MqttEndpoints: Attribute<Value<string>[]>; AmqpEndpoints: Attribute<Value<string>[]>; Arn: Attribute<string>; ConfigurationId: Attribute<string>; WssEndpoints: Attribute<Value<string>[]> }
export function broker(brokerProps: Broker): Broker & { attributes: BrokerAttributes } { return ({ ...brokerProps, _logicalType: 'AWS::AmazonMQ::Broker', attributes: { IpAddresses: 'IpAddresses', OpenWireEndpoints: 'OpenWireEndpoints', ConfigurationRevision: 'ConfigurationRevision', StompEndpoints: 'StompEndpoints', MqttEndpoints: 'MqttEndpoints', AmqpEndpoints: 'AmqpEndpoints', Arn: 'Arn', ConfigurationId: 'ConfigurationId', WssEndpoints: 'WssEndpoints' } }) }

export interface Broker extends KloudResource {
    engineVersion: Value<string>;
    hostInstanceType: Value<string>;
    autoMinorVersionUpgrade: Value<boolean>;
    users: UserProps[];
    brokerName: Value<string>;
    deploymentMode: Value<string>;
    engineType: Value<string>;
    publiclyAccessible: Value<boolean>;
    securityGroups?: Value<Value<string>[]>;
    storageType?: Value<string>;
    configuration?: ConfigurationIdProps;
    maintenanceWindowStartTime?: MaintenanceWindowProps;
    logs?: LogListProps;
    subnetIds?: Value<Value<string>[]>;
    encryptionOptions?: EncryptionOptionsProps;
    tags?: TagsEntryProps[];
}