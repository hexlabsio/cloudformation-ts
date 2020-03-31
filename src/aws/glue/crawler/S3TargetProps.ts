import { Value } from '../../../kloudformation/Value';

export function s3TargetProps(s3TargetPropsProps: S3TargetProps): S3TargetProps { return (s3TargetPropsProps) }

export interface S3TargetProps {
    path?: Value<string>;
    exclusions?: Value<Value<string>[]>;
}