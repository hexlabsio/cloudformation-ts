import { Value } from '../../../kloudformation/Value';

export function logConfigProps(logConfigPropsProps: LogConfigProps): LogConfigProps { return (logConfigPropsProps) }

export interface LogConfigProps {
    cloudWatchLogsRoleArn?: Value<string>;
    excludeVerboseContent?: Value<boolean>;
    fieldLogLevel?: Value<string>;
}