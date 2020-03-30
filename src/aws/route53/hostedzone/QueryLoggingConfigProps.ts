import { Value } from '../../../kloudformation/Value';

export function queryLoggingConfigProps(queryLoggingConfigPropsProps: QueryLoggingConfigProps): QueryLoggingConfigProps { return (queryLoggingConfigPropsProps) as unknown as QueryLoggingConfigProps }

export interface QueryLoggingConfigProps {
    cloudWatchLogsLogGroupArn: Value<string>;
}