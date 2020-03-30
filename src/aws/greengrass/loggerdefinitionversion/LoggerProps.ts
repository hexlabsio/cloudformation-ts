import { Value } from '../../../kloudformation/Value';

export function loggerProps(loggerPropsProps: LoggerProps): LoggerProps { return (loggerPropsProps) as unknown as LoggerProps }

export interface LoggerProps {
    type: Value<string>;
    level: Value<string>;
    id: Value<string>;
    component: Value<string>;
    space?: Value<number>;
}