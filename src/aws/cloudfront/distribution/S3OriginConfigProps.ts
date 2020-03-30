import { Value } from '../../../kloudformation/Value';

export function s3OriginConfigProps(s3OriginConfigPropsProps: S3OriginConfigProps): S3OriginConfigProps { return (s3OriginConfigPropsProps) as unknown as S3OriginConfigProps }

export interface S3OriginConfigProps {
    originAccessIdentity?: Value<string>;
}