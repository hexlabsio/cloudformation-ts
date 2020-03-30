import { Value } from '../../kloudformation/Value';
import { CognitoOptionsProps } from './domain/CognitoOptionsProps';
import { EBSOptionsProps } from './domain/EBSOptionsProps';
import { ElasticsearchClusterConfigProps } from './domain/ElasticsearchClusterConfigProps';
import { EncryptionAtRestOptionsProps } from './domain/EncryptionAtRestOptionsProps';
import { LogPublishingOptionProps } from './domain/LogPublishingOptionProps';
import { NodeToNodeEncryptionOptionsProps } from './domain/NodeToNodeEncryptionOptionsProps';
import { SnapshotOptionsProps } from './domain/SnapshotOptionsProps';
import { Tag } from '../Tag';
import { VPCOptionsProps } from './domain/VPCOptionsProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function domain(domainProps: Domain & { logicalName?: string }): Domain { return ({ ...domainProps, _logicalType: 'AWS::Elasticsearch::Domain' }) as unknown as Domain }

export interface Domain extends KloudResource {
    accessPolicies?: Value<any>;
    advancedOptions?: { [key: string]: Value<string> };
    cognitoOptions?: CognitoOptionsProps;
    domainName?: Value<string>;
    eBSOptions?: EBSOptionsProps;
    elasticsearchClusterConfig?: ElasticsearchClusterConfigProps;
    elasticsearchVersion?: Value<string>;
    encryptionAtRestOptions?: EncryptionAtRestOptionsProps;
    logPublishingOptions?: LogPublishingOptionProps[];
    nodeToNodeEncryptionOptions?: NodeToNodeEncryptionOptionsProps;
    snapshotOptions?: SnapshotOptionsProps;
    tags?: Tag[];
    vPCOptions?: VPCOptionsProps;
}