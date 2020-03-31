import { Value } from '../../../kloudformation/Value';
import { GlueConfigurationProps } from './GlueConfigurationProps';

export function s3DestinationConfigurationProps(s3DestinationConfigurationPropsProps: S3DestinationConfigurationProps): S3DestinationConfigurationProps { return (s3DestinationConfigurationPropsProps) }

export interface S3DestinationConfigurationProps {
    bucket: Value<string>;
    key: Value<string>;
    roleArn: Value<string>;
    glueConfiguration?: GlueConfigurationProps;
}