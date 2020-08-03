import { Value } from '../../../kloudformation/Value';
import { IPSetForwardedIPConfigurationProps } from './IPSetForwardedIPConfigurationProps';

export interface IPSetReferenceStatementProps {
  arn: Value<string>
  iPSetForwardedIPConfig?: IPSetForwardedIPConfigurationProps
}