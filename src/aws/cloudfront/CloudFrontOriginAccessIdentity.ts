import { CloudFrontOriginAccessIdentityConfigProps } from './cloudfrontoriginaccessidentity/CloudFrontOriginAccessIdentityConfigProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type CloudFrontOriginAccessIdentityAttributes = { S3CanonicalUserId: Attribute<string> }
export function cloudFrontOriginAccessIdentity(cloudFrontOriginAccessIdentityProps: CloudFrontOriginAccessIdentity): CloudFrontOriginAccessIdentity & { attributes: CloudFrontOriginAccessIdentityAttributes } { return ({ ...cloudFrontOriginAccessIdentityProps, _logicalType: 'AWS::CloudFront::CloudFrontOriginAccessIdentity', attributes: { S3CanonicalUserId: 'S3CanonicalUserId' } }) }

export interface CloudFrontOriginAccessIdentity extends KloudResource {
    cloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfigProps;
}