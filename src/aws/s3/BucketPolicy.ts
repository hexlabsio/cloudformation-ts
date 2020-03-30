import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function bucketPolicy(bucketPolicyProps: BucketPolicy & { logicalName?: string }): BucketPolicy { return ({ ...bucketPolicyProps, _logicalType: 'AWS::S3::BucketPolicy' }) as unknown as BucketPolicy }

export interface BucketPolicy extends KloudResource {
    bucket: Value<string>;
    policyDocument: Value<any>;
}