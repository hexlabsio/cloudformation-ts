import { Value } from '../../../kloudformation/Value';

export interface DomainValidationOptionProps {
  domainName: Value<string>
  hostedZoneId?: Value<string>
  validationDomain?: Value<string>
}