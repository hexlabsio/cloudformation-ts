import { Value } from '../../../kloudformation/Value';

export function loggingProps(loggingPropsProps: LoggingProps): LoggingProps { return (loggingPropsProps) as unknown as LoggingProps }

export interface LoggingProps {
    bucket: Value<string>;
    enabled: Value<boolean>;
    prefix: Value<string>;
}