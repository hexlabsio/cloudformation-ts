import { Value } from '../../../kloudformation/Value';
import { StatementTwoProps } from './StatementTwoProps';

export function rateBasedStatementOneProps(rateBasedStatementOnePropsProps: RateBasedStatementOneProps): RateBasedStatementOneProps { return (rateBasedStatementOnePropsProps) }

export interface RateBasedStatementOneProps {
    limit: Value<number>;
    aggregateKeyType: Value<string>;
    scopeDownStatement?: StatementTwoProps;
}