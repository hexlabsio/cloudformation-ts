import { Value } from '../../../kloudformation/Value';
import { StatementThreeProps } from './StatementThreeProps';
import { ForwardedIPConfigurationProps } from './ForwardedIPConfigurationProps';

export interface RateBasedStatementTwoProps {
  limit: Value<number>
  aggregateKeyType: Value<string>
  scopeDownStatement?: StatementThreeProps
  forwardedIPConfig?: ForwardedIPConfigurationProps
}