import { CloudFrontOriginAccessIdentityConfigProps } from './cloudfrontoriginaccessidentity/CloudFrontOriginAccessIdentityConfigProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function cloudFrontOriginAccessIdentity(cloudFrontOriginAccessIdentityProps: CloudFrontOriginAccessIdentity & { logicalName?: string }): CloudFrontOriginAccessIdentity { return ({ ...cloudFrontOriginAccessIdentityProps, _logicalType: 'AWS::CloudFront::CloudFrontOriginAccessIdentity' }) as unknown as CloudFrontOriginAccessIdentity }

export interface CloudFrontOriginAccessIdentity extends KloudResource {
    cloudFrontOriginAccessIdentityConfig: CloudFrontOriginAccessIdentityConfigProps;
}