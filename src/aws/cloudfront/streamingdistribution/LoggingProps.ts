import { Value } from '../../../kloudformation/Value';

export function loggingProps(loggingPropsProps: LoggingProps): LoggingProps { return (loggingPropsProps) }

export interface LoggingProps {
    bucket: Value<string>;
    enabled: Value<boolean>;
    prefix: Value<string>;
}