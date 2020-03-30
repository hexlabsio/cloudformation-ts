import { Value } from '../../../kloudformation/Value';

export function domainValidationOptionProps(domainValidationOptionPropsProps: DomainValidationOptionProps): DomainValidationOptionProps { return (domainValidationOptionPropsProps) as unknown as DomainValidationOptionProps }

export interface DomainValidationOptionProps {
    domainName: Value<string>;
    validationDomain: Value<string>;
}