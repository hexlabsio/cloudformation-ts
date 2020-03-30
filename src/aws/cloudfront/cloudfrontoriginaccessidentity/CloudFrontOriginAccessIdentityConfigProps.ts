import { Value } from '../../../kloudformation/Value';

export function cloudFrontOriginAccessIdentityConfigProps(cloudFrontOriginAccessIdentityConfigPropsProps: CloudFrontOriginAccessIdentityConfigProps): CloudFrontOriginAccessIdentityConfigProps { return (cloudFrontOriginAccessIdentityConfigPropsProps) as unknown as CloudFrontOriginAccessIdentityConfigProps }

export interface CloudFrontOriginAccessIdentityConfigProps {
    comment: Value<string>;
}