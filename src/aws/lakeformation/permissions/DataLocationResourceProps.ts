import { Value } from '../../../kloudformation/Value';

export function dataLocationResourceProps(dataLocationResourcePropsProps: DataLocationResourceProps): DataLocationResourceProps { return (dataLocationResourcePropsProps) }

export interface DataLocationResourceProps {
    s3Resource?: Value<string>;
}