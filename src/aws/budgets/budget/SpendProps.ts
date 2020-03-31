import { Value } from '../../../kloudformation/Value';

export function spendProps(spendPropsProps: SpendProps): SpendProps { return (spendPropsProps) }

export interface SpendProps {
    amount: Value<number>;
    unit: Value<string>;
}