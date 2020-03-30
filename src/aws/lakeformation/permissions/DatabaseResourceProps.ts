import { Value } from '../../../kloudformation/Value';

export function databaseResourceProps(databaseResourcePropsProps: DatabaseResourceProps): DatabaseResourceProps { return (databaseResourcePropsProps) as unknown as DatabaseResourceProps }

export interface DatabaseResourceProps {
    name?: Value<string>;
}