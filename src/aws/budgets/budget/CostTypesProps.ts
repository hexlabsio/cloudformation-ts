import { Value } from '../../../kloudformation/Value';

export function costTypesProps(costTypesPropsProps: CostTypesProps): CostTypesProps { return (costTypesPropsProps) as unknown as CostTypesProps }

export interface CostTypesProps {
    includeSupport?: Value<boolean>;
    includeOtherSubscription?: Value<boolean>;
    includeTax?: Value<boolean>;
    includeSubscription?: Value<boolean>;
    useBlended?: Value<boolean>;
    includeUpfront?: Value<boolean>;
    includeDiscount?: Value<boolean>;
    includeCredit?: Value<boolean>;
    includeRecurring?: Value<boolean>;
    useAmortized?: Value<boolean>;
    includeRefund?: Value<boolean>;
}