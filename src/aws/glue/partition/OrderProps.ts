import { Value } from '../../../kloudformation/Value';

export function orderProps(orderPropsProps: OrderProps): OrderProps { return (orderPropsProps) as unknown as OrderProps }

export interface OrderProps {
    column: Value<string>;
    sortOrder?: Value<number>;
}