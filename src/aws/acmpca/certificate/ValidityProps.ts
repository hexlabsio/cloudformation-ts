import { Value } from '../../../kloudformation/Value';

export function validityProps(validityPropsProps: ValidityProps): ValidityProps { return (validityPropsProps) }

export interface ValidityProps {
    value: Value<number>;
    type: Value<string>;
}