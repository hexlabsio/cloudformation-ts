import { Value } from '../../../kloudformation/Value';

export function jdbcTargetProps(jdbcTargetPropsProps: JdbcTargetProps): JdbcTargetProps { return (jdbcTargetPropsProps) as unknown as JdbcTargetProps }

export interface JdbcTargetProps {
    connectionName?: Value<string>;
    path?: Value<string>;
    exclusions?: Value<Value<string>[]>;
}