import { Value } from '../../../kloudformation/Value';

export function queryLoggingConfigProps(queryLoggingConfigPropsProps: QueryLoggingConfigProps): QueryLoggingConfigProps { return (queryLoggingConfigPropsProps) }

export interface QueryLoggingConfigProps {
    cloudWatchLogsLogGroupArn: Value<string>;
}