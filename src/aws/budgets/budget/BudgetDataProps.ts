import { SpendProps } from './SpendProps';
import { TimePeriodProps } from './TimePeriodProps';
import { Value } from '../../../kloudformation/Value';
import { CostTypesProps } from './CostTypesProps';

export interface BudgetDataProps {
  budgetLimit?: SpendProps
  timePeriod?: TimePeriodProps
  timeUnit: Value<string>
  plannedBudgetLimits?: Value<any>
  costFilters?: Value<any>
  budgetName?: Value<string>
  costTypes?: CostTypesProps
  budgetType: Value<string>
}