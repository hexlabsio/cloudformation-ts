import { Value } from '../../kloudformation/Value';
import { UserProps } from './broker/UserProps';
import { ConfigurationIdProps } from './broker/ConfigurationIdProps';
import { MaintenanceWindowProps } from './broker/MaintenanceWindowProps';
import { LogListProps } from './broker/LogListProps';
import { EncryptionOptionsProps } from './broker/EncryptionOptionsProps';
import { TagsEntryProps } from './broker/TagsEntryProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function broker(brokerProps: Broker & { logicalName?: string }): Broker { return ({ ...brokerProps, _logicalType: 'AWS::AmazonMQ::Broker' }) as unknown as Broker }

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