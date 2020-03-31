import { Value } from '../../../kloudformation/Value';

export function s3Props(s3PropsProps: S3Props): S3Props { return (s3PropsProps) }

export interface S3Props {
    enabled: Value<boolean>;
    bucket?: Value<string>;
    prefix?: Value<string>;
}