import {Bucket} from "../../aws/s3/Bucket";
import {BucketPolicy} from "../../aws/s3/BucketPolicy";
import {AWS} from "../aws";

import {join, Value} from "../Value";

export class Website {
  
  bucket: Bucket;
  bucketPolicy: BucketPolicy;
  
  private constructor(bucket: Bucket, bucketPolicy: BucketPolicy) {
    this.bucket = bucket;
    this.bucketPolicy = bucketPolicy;
  }
  
  static create(aws: AWS, indexDocument: Value<string> = 'index.html', errorDocument: Value<string> = indexDocument): Website {
    const bucket = aws.s3Bucket({
      accessControl: 'PublicRead',
      websiteConfiguration: { indexDocument, errorDocument }
    });
    const policy = aws.s3BucketPolicy({
      bucket: bucket,
      policyDocument: { statement: [{action: 's3:GetObject', effect: 'Allow', resource: [join('arn:aws:s3:::', bucket, '/*')], principal: '*'}] }
    });
    return new Website(bucket, policy);
  }
}
