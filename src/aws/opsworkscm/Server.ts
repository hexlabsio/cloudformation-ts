import { Value } from '../../kloudformation/Value';
import { EngineAttributeProps } from './server/EngineAttributeProps';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function server(serverProps: Server & { logicalName?: string }): Server { return ({ ...serverProps, _logicalType: 'AWS::OpsWorksCM::Server' }) as unknown as Server }

export interface Server extends KloudResource {
    serviceRoleArn: Value<string>;
    instanceProfileArn: Value<string>;
    instanceType: Value<string>;
    keyPair?: Value<string>;
    engineVersion?: Value<string>;
    disableAutomatedBackup?: Value<boolean>;
    backupId?: Value<string>;
    engineModel?: Value<string>;
    preferredMaintenanceWindow?: Value<string>;
    associatePublicIpAddress?: Value<boolean>;
    customCertificate?: Value<string>;
    preferredBackupWindow?: Value<string>;
    securityGroupIds?: Value<Value<string>[]>;
    subnetIds?: Value<Value<string>[]>;
    customDomain?: Value<string>;
    customPrivateKey?: Value<string>;
    serverName?: Value<string>;
    engineAttributes?: EngineAttributeProps[];
    backupRetentionCount?: Value<number>;
    tags?: Tag[];
    engine?: Value<string>;
}