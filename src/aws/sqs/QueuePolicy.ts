import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function queuePolicy(queuePolicyProps: QueuePolicy & { logicalName?: string }): QueuePolicy { return ({ ...queuePolicyProps, _logicalType: 'AWS::SQS::QueuePolicy' }) as unknown as QueuePolicy }

export interface QueuePolicy extends KloudResource {
    policyDocument: Value<any>;
    queues: Value<Value<string>[]>;
}