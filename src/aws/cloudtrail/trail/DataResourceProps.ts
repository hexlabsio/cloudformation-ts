import { Value } from '../../../kloudformation/Value';

export function dataResourceProps(dataResourcePropsProps: DataResourceProps): DataResourceProps { return (dataResourcePropsProps) as unknown as DataResourceProps }

export interface DataResourceProps {
    type: Value<string>;
    values?: Value<Value<string>[]>;
}