import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type QueueAttributes = { Arn: Attribute<string>; QueueName: Attribute<string> }
export function queue(queueProps: Queue): Queue & { attributes: QueueAttributes } { return ({ ...queueProps, _logicalType: 'AWS::SQS::Queue', attributes: { Arn: 'Arn', QueueName: 'QueueName' } }) }

export interface Queue extends KloudResource {
    contentBasedDeduplication?: Value<boolean>;
    delaySeconds?: Value<number>;
    fifoQueue?: Value<boolean>;
    kmsDataKeyReusePeriodSeconds?: Value<number>;
    kmsMasterKeyId?: Value<string>;
    maximumMessageSize?: Value<number>;
    messageRetentionPeriod?: Value<number>;
    queueName?: Value<string>;
    receiveMessageWaitTimeSeconds?: Value<number>;
    redrivePolicy?: Value<any>;
    tags?: Tag[];
    visibilityTimeout?: Value<number>;
}