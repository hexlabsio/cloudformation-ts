import { Value } from '../../../kloudformation/Value';

export function columnWildcardProps(columnWildcardPropsProps: ColumnWildcardProps): ColumnWildcardProps { return (columnWildcardPropsProps) }

export interface ColumnWildcardProps {
    excludedColumnNames?: Value<Value<string>[]>;
}