import { Value } from '../../../kloudformation/Value';

export function columnProps(columnPropsProps: ColumnProps): ColumnProps { return (columnPropsProps) }

export interface ColumnProps {
    name: Value<string>;
    comment?: Value<string>;
    type?: Value<string>;
}