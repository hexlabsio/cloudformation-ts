import { Value } from '../../kloudformation/Value';
import { KafkaSettingsProps } from './endpoint/KafkaSettingsProps';
import { ElasticsearchSettingsProps } from './endpoint/ElasticsearchSettingsProps';
import { S3SettingsProps } from './endpoint/S3SettingsProps';
import { DynamoDbSettingsProps } from './endpoint/DynamoDbSettingsProps';
import { KinesisSettingsProps } from './endpoint/KinesisSettingsProps';
import { Tag } from '../Tag';
import { MongoDbSettingsProps } from './endpoint/MongoDbSettingsProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type EndpointAttributes = { ExternalId: Attribute<string> }
export function endpoint(endpointProps: Endpoint): Endpoint & { attributes: EndpointAttributes } { return ({ ...endpointProps, _logicalType: 'AWS::DMS::Endpoint', attributes: { ExternalId: 'ExternalId' } }) }

export interface Endpoint extends KloudResource {
    engineName: Value<string>;
    endpointType: Value<string>;
    kmsKeyId?: Value<string>;
    kafkaSettings?: KafkaSettingsProps;
    port?: Value<number>;
    databaseName?: Value<string>;
    elasticsearchSettings?: ElasticsearchSettingsProps;
    s3Settings?: S3SettingsProps;
    dynamoDbSettings?: DynamoDbSettingsProps;
    kinesisSettings?: KinesisSettingsProps;
    username?: Value<string>;
    sslMode?: Value<string>;
    serverName?: Value<string>;
    extraConnectionAttributes?: Value<string>;
    tags?: Tag[];
    endpointIdentifier?: Value<string>;
    password?: Value<string>;
    certificateArn?: Value<string>;
    mongoDbSettings?: MongoDbSettingsProps;
}