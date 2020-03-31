import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type QueuePolicyAttributes = {  }
export function queuePolicy(queuePolicyProps: QueuePolicy): QueuePolicy & { attributes: QueuePolicyAttributes } { return ({ ...queuePolicyProps, _logicalType: 'AWS::SQS::QueuePolicy', attributes: {  } }) }

export interface QueuePolicy extends KloudResource {
    policyDocument: Value<any>;
    queues: Value<Value<string>[]>;
}