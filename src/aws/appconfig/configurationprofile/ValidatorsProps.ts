import { Value } from '../../../kloudformation/Value';

export function validatorsProps(validatorsPropsProps: ValidatorsProps): ValidatorsProps { return (validatorsPropsProps) }

export interface ValidatorsProps {
    type?: Value<string>;
    content?: Value<string>;
}