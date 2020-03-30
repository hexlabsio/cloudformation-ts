import { Value } from '../../../kloudformation/Value';

export function spendProps(spendPropsProps: SpendProps): SpendProps { return (spendPropsProps) as unknown as SpendProps }

export interface SpendProps {
    amount: Value<number>;
    unit: Value<string>;
}