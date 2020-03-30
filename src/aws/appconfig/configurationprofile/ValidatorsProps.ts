import { Value } from '../../../kloudformation/Value';

export function validatorsProps(validatorsPropsProps: ValidatorsProps): ValidatorsProps { return (validatorsPropsProps) as unknown as ValidatorsProps }

export interface ValidatorsProps {
    type?: Value<string>;
    content?: Value<string>;
}