import { Value } from '../../../kloudformation/Value';

export function fieldToMatchProps(fieldToMatchPropsProps: FieldToMatchProps): FieldToMatchProps { return (fieldToMatchPropsProps) as unknown as FieldToMatchProps }

export interface FieldToMatchProps {
    type: Value<string>;
    data?: Value<string>;
}