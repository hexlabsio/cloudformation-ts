import { Value } from '../../../kloudformation/Value';

export function fieldToMatchProps(fieldToMatchPropsProps: FieldToMatchProps): FieldToMatchProps { return (fieldToMatchPropsProps) }

export interface FieldToMatchProps {
    type: Value<string>;
    data?: Value<string>;
}