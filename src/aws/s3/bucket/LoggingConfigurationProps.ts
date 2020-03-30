import { Value } from '../../../kloudformation/Value';

export function loggingConfigurationProps(loggingConfigurationPropsProps: LoggingConfigurationProps): LoggingConfigurationProps { return (loggingConfigurationPropsProps) as unknown as LoggingConfigurationProps }

export interface LoggingConfigurationProps {
    destinationBucketName?: Value<string>;
    logFilePrefix?: Value<string>;
}