import { Value } from '../../../kloudformation/Value';

export function validityProps(validityPropsProps: ValidityProps): ValidityProps { return (validityPropsProps) as unknown as ValidityProps }

export interface ValidityProps {
    value: Value<number>;
    type: Value<string>;
}