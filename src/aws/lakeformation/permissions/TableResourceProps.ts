import { Value } from '../../../kloudformation/Value';

export function tableResourceProps(tableResourcePropsProps: TableResourceProps): TableResourceProps { return (tableResourcePropsProps) as unknown as TableResourceProps }

export interface TableResourceProps {
    databaseName?: Value<string>;
    name?: Value<string>;
}