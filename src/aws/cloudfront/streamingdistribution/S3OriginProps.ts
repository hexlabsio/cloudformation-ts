import { Value } from '../../../kloudformation/Value';

export function s3OriginProps(s3OriginPropsProps: S3OriginProps): S3OriginProps { return (s3OriginPropsProps) }

export interface S3OriginProps {
    domainName: Value<string>;
    originAccessIdentity: Value<string>;
}