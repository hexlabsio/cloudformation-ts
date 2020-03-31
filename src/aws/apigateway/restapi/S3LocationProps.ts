import { Value } from '../../../kloudformation/Value';

export function s3LocationProps(s3LocationPropsProps: S3LocationProps): S3LocationProps { return (s3LocationPropsProps) }

export interface S3LocationProps {
    bucket?: Value<string>;
    eTag?: Value<string>;
    key?: Value<string>;
    version?: Value<string>;
}