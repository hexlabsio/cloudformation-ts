import { Value } from '../../../kloudformation/Value';
import { StatementTwoProps } from './StatementTwoProps';
import { ForwardedIPConfigurationProps } from './ForwardedIPConfigurationProps';

export interface RateBasedStatementOneProps {
  limit: Value<number>
  aggregateKeyType: Value<string>
  scopeDownStatement?: StatementTwoProps
  forwardedIPConfig?: ForwardedIPConfigurationProps
}