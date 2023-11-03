import { DistributionProperties, Distribution } from '../../aws/cloudfront/Distribution';
import { RecordSet } from '../../aws/route53/RecordSet';
import {Bucket} from "../../aws/s3/Bucket";
import {BucketPolicy} from "../../aws/s3/BucketPolicy";
import { AWSResourcesFor } from "../aws";
import { Policy } from '../iam/PolicyDocument';

import {join, Value} from "../Value";

export type WebsiteExpects = AWSResourcesFor<'s3' | 'cloudfront' | 'route53'>
export class Website {

  private constructor(
    private aws: WebsiteExpects,
    public bucket: Bucket,
    public bucketPolicy: BucketPolicy,
    public distribution?: Distribution,
    public aRecord?: RecordSet,
  ) {
  }

  withARecord(domain: Value<string>, hostedZoneId: Value<string>) {
    if(!this.distribution) throw new Error('You must call withDistribution to create A record');
    this.aRecord = this.aws.route53.recordSet({
      name: domain,
      type: 'A',
      hostedZoneId,
      aliasTarget: {
        dNSName: this.distribution!.attributes.DomainName(),
        hostedZoneId: this.aws.cloudFrontHostedZoneId
      }
    });
  }

  withDistribution(
    originId: Value<string>,
    certificateArn: Value<string>,
    aliases: Value<Value<string>[]>,
    rootObject: Value<string> = 'index.html',
    httpVersion: DistributionProperties['distributionConfig']['httpVersion'] = 'http2',
    edgeLambdaArn?: Value<string>
  ): this {
      this.distribution = this.aws.cloudfront.distribution({
        distributionConfig: {
          aliases,
          customErrorResponses: [{ errorCode: 404, responseCode: 200, responsePagePath: '/' }],
          defaultCacheBehavior: {
            cachePolicyId: '658327ea-f89d-4fab-a63d-7e88639e58f6',
            compress: false,
            ...(edgeLambdaArn ? { lambdaFunctionAssociations: [{
              eventType: 'viewer-request',
              lambdaFunctionARN: edgeLambdaArn,
            }] } : {}),
            responseHeadersPolicyId: '67f7725c-6f97-4210-82d7-5512b31e9d03',
            targetOriginId: originId,
            viewerProtocolPolicy: 'redirect-to-https'
          },
          defaultRootObject: rootObject,
          enabled: true,
          httpVersion: httpVersion,
          iPV6Enabled: true,
          origins: [
            {
              id: originId,
              customOriginConfig: {
                originProtocolPolicy: 'http-only',
                originSSLProtocols: [ 'TLSv1.2' ],
              },
              domainName: this.aws.functions.select(2, this.aws.functions.split('/', this.bucket.attributes.WebsiteURL())),
            }
          ],
          viewerCertificate: {
            acmCertificateArn: certificateArn,
            minimumProtocolVersion: 'TLSv1.2_2021',
            sslSupportMethod: 'sni-only'
          }
        }
      });
      return this;
  }
  
  static create(
    aws: WebsiteExpects,
    bucketName: Value<string>,
    indexDocument: Value<string> = 'index.html',
    errorDocument: Value<string> = indexDocument
  ): Website {
    const bucket = aws.s3.bucket({
      bucketName: bucketName,
      websiteConfiguration: { indexDocument, errorDocument },
      publicAccessBlockConfiguration: {
        blockPublicAcls: false,
        blockPublicPolicy: false,
        ignorePublicAcls: false,
        restrictPublicBuckets: false
      }
    });

    const policy = aws.s3.bucketPolicy({
      bucket: bucket,
      policyDocument: Policy.allow('s3:GetObject', [join(bucket.attributes.Arn(), '/*')], { principal: { AWS: '*' } }).document
    });

    return new Website(aws, bucket, policy);
  }
}
