import { Value } from '../../../kloudformation/Value';

export function dataSourceProps(dataSourcePropsProps: DataSourceProps): DataSourceProps { return (dataSourcePropsProps) }

export interface DataSourceProps {
    arn?: Value<string>;
    databaseName?: Value<string>;
    type?: Value<string>;
}