import { Value } from '../../../kloudformation/Value';

export function loggingProps(loggingPropsProps: LoggingProps): LoggingProps { return (loggingPropsProps) }

export interface LoggingProps {
    bucket: Value<string>;
    includeCookies?: Value<boolean>;
    prefix?: Value<string>;
}