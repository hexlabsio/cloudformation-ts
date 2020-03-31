import { Value } from '../../../kloudformation/Value';

export function s3DestinationProps(s3DestinationPropsProps: S3DestinationProps): S3DestinationProps { return (s3DestinationPropsProps) }

export interface S3DestinationProps {
    bucketName: Value<string>;
    bucketRegion: Value<string>;
    syncFormat: Value<string>;
    kMSKeyArn?: Value<string>;
    bucketPrefix?: Value<string>;
}