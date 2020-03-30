import { Value } from '../../../kloudformation/Value';

export function statusCodesProps(statusCodesPropsProps: StatusCodesProps): StatusCodesProps { return (statusCodesPropsProps) as unknown as StatusCodesProps }

export interface StatusCodesProps {
    quantity: Value<number>;
    items: Value<Value<number>[]>;
}