import { Value } from '../../../kloudformation/Value';

export function fieldProps(fieldPropsProps: FieldProps): FieldProps { return (fieldPropsProps) }

export interface FieldProps {
    key: Value<string>;
    refValue?: Value<string>;
    stringValue?: Value<string>;
}