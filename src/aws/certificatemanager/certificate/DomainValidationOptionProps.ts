import { Value } from '../../../kloudformation/Value';

export function domainValidationOptionProps(domainValidationOptionPropsProps: DomainValidationOptionProps): DomainValidationOptionProps { return (domainValidationOptionPropsProps) }

export interface DomainValidationOptionProps {
    domainName: Value<string>;
    validationDomain: Value<string>;
}