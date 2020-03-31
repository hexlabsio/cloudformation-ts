import { Value } from '../../../kloudformation/Value';

export function statusCodesProps(statusCodesPropsProps: StatusCodesProps): StatusCodesProps { return (statusCodesPropsProps) }

export interface StatusCodesProps {
    quantity: Value<number>;
    items: Value<Value<number>[]>;
}