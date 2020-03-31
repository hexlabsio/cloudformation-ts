import { Value } from '../../../kloudformation/Value';

export function selectAttributesProps(selectAttributesPropsProps: SelectAttributesProps): SelectAttributesProps { return (selectAttributesPropsProps) }

export interface SelectAttributesProps {
    next?: Value<string>;
    attributes?: Value<Value<string>[]>;
    name?: Value<string>;
}