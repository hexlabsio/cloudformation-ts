import { Value } from '../../../kloudformation/Value';
import { LogDestinationProps } from './LogDestinationProps';

export function loggingConfigurationProps(loggingConfigurationPropsProps: LoggingConfigurationProps): LoggingConfigurationProps { return (loggingConfigurationPropsProps) }

export interface LoggingConfigurationProps {
    includeExecutionData?: Value<boolean>;
    destinations?: LogDestinationProps[];
    level?: Value<string>;
}