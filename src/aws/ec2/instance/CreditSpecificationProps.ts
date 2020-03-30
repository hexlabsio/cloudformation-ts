import { Value } from '../../../kloudformation/Value';

export function creditSpecificationProps(creditSpecificationPropsProps: CreditSpecificationProps): CreditSpecificationProps { return (creditSpecificationPropsProps) as unknown as CreditSpecificationProps }

export interface CreditSpecificationProps {
    cPUCredits?: Value<string>;
}