import { Value } from '../../../kloudformation/Value';

export function dataResourceProps(dataResourcePropsProps: DataResourceProps): DataResourceProps { return (dataResourcePropsProps) }

export interface DataResourceProps {
    type: Value<string>;
    values?: Value<Value<string>[]>;
}