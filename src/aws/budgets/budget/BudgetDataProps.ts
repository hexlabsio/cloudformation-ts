import { Value } from '../../../kloudformation/Value';
import { SpendProps } from './SpendProps';
import { TimePeriodProps } from './TimePeriodProps';
import { CostTypesProps } from './CostTypesProps';

export function budgetDataProps(budgetDataPropsProps: BudgetDataProps): BudgetDataProps { return (budgetDataPropsProps) as unknown as BudgetDataProps }

export interface BudgetDataProps {
    timeUnit: Value<string>;
    budgetType: Value<string>;
    budgetLimit?: SpendProps;
    timePeriod?: TimePeriodProps;
    plannedBudgetLimits?: Value<any>;
    costFilters?: Value<any>;
    budgetName?: Value<string>;
    costTypes?: CostTypesProps;
}