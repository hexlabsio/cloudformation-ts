import { Value } from '../../../kloudformation/Value';

export function tableResourceProps(tableResourcePropsProps: TableResourceProps): TableResourceProps { return (tableResourcePropsProps) }

export interface TableResourceProps {
    databaseName?: Value<string>;
    name?: Value<string>;
}