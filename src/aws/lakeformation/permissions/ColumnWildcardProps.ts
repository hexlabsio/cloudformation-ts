import { Value } from '../../../kloudformation/Value';

export function columnWildcardProps(columnWildcardPropsProps: ColumnWildcardProps): ColumnWildcardProps { return (columnWildcardPropsProps) as unknown as ColumnWildcardProps }

export interface ColumnWildcardProps {
    excludedColumnNames?: Value<Value<string>[]>;
}