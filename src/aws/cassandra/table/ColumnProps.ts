import { Value } from '../../../kloudformation/Value';

export function columnProps(columnPropsProps: ColumnProps): ColumnProps { return (columnPropsProps) as unknown as ColumnProps }

export interface ColumnProps {
    columnName: Value<string>;
    columnType: Value<string>;
}