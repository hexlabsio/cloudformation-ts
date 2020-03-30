import { Value } from '../../../kloudformation/Value';
import { StatementThreeProps } from './StatementThreeProps';

export function rateBasedStatementTwoProps(rateBasedStatementTwoPropsProps: RateBasedStatementTwoProps): RateBasedStatementTwoProps { return (rateBasedStatementTwoPropsProps) as unknown as RateBasedStatementTwoProps }

export interface RateBasedStatementTwoProps {
    limit: Value<number>;
    aggregateKeyType: Value<string>;
    scopeDownStatement?: StatementThreeProps;
}