import { Value } from '../../../kloudformation/Value';

export function databaseResourceProps(databaseResourcePropsProps: DatabaseResourceProps): DatabaseResourceProps { return (databaseResourcePropsProps) }

export interface DatabaseResourceProps {
    name?: Value<string>;
}