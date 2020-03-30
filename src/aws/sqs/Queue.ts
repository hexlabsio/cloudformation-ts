import { Value } from '../../kloudformation/Value';
import { Tag } from '../Tag';
import { KloudResource } from '../../kloudformation/KloudResource';

export function queue(queueProps: Queue & { logicalName?: string }): Queue { return ({ ...queueProps, _logicalType: 'AWS::SQS::Queue' }) as unknown as Queue }

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