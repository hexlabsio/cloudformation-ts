import { Value } from '../../../kloudformation/Value';
import { CopyCommandProps } from './CopyCommandProps';
import { S3DestinationConfigurationProps } from './S3DestinationConfigurationProps';
import { CloudWatchLoggingOptionsProps } from './CloudWatchLoggingOptionsProps';
import { ProcessingConfigurationProps } from './ProcessingConfigurationProps';

export function redshiftDestinationConfigurationProps(redshiftDestinationConfigurationPropsProps: RedshiftDestinationConfigurationProps): RedshiftDestinationConfigurationProps { return (redshiftDestinationConfigurationPropsProps) as unknown as RedshiftDestinationConfigurationProps }

export interface RedshiftDestinationConfigurationProps {
    clusterJDBCURL: Value<string>;
    copyCommand: CopyCommandProps;
    password: Value<string>;
    roleARN: Value<string>;
    s3Configuration: S3DestinationConfigurationProps;
    username: Value<string>;
    cloudWatchLoggingOptions?: CloudWatchLoggingOptionsProps;
    processingConfiguration?: ProcessingConfigurationProps;
}