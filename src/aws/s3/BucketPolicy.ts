import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type BucketPolicyAttributes = {  }
export function bucketPolicy(bucketPolicyProps: BucketPolicy): BucketPolicy & { attributes: BucketPolicyAttributes } { return ({ ...bucketPolicyProps, _logicalType: 'AWS::S3::BucketPolicy', attributes: {  } }) }

export interface BucketPolicy extends KloudResource {
    bucket: Value<string>;
    policyDocument: Value<any>;
}