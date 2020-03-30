import { Value } from '../../../kloudformation/Value';

export function logListProps(logListPropsProps: LogListProps): LogListProps { return (logListPropsProps) as unknown as LogListProps }

export interface LogListProps {
    audit?: Value<boolean>;
    general?: Value<boolean>;
}