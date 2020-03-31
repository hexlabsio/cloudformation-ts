import { Value } from '../../../kloudformation/Value';

export function jdbcTargetProps(jdbcTargetPropsProps: JdbcTargetProps): JdbcTargetProps { return (jdbcTargetPropsProps) }

export interface JdbcTargetProps {
    connectionName?: Value<string>;
    path?: Value<string>;
    exclusions?: Value<Value<string>[]>;
}