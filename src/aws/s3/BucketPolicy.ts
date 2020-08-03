import { Value } from '../../kloudformation/Value';
import { PolicyDocument } from '../../kloudformation/iam/PolicyDocument';
import { KloudResource } from '../../kloudformation/KloudResource';
export function bucketPolicy(bucketPolicyProps: BucketPolicy): BucketPolicy { return ({ ...bucketPolicyProps, _logicalType: '' }) }
  
export interface BucketPolicy extends KloudResource {
  bucket: Value<string>
  policyDocument: Value<PolicyDocument>
}