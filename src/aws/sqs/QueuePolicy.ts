import { Value } from '../../kloudformation/Value';
import { PolicyDocument } from '../../kloudformation/iam/PolicyDocument';
import { KloudResource } from '../../kloudformation/KloudResource';
export function queuePolicy(queuePolicyProps: QueuePolicy): QueuePolicy { return ({ ...queuePolicyProps, _logicalType: '' }) }
  
export interface QueuePolicy extends KloudResource {
  policyDocument: Value<PolicyDocument>
  queues: Value<Value<string>[]>
}