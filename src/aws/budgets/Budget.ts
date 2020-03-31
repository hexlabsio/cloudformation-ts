import { BudgetDataProps } from './budget/BudgetDataProps';
import { NotificationWithSubscribersProps } from './budget/NotificationWithSubscribersProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type BudgetAttributes = {  }
export function budget(budgetProps: Budget): Budget & { attributes: BudgetAttributes } { return ({ ...budgetProps, _logicalType: 'AWS::Budgets::Budget', attributes: {  } }) }

export interface Budget extends KloudResource {
    budget: BudgetDataProps;
    notificationsWithSubscribers?: NotificationWithSubscribersProps[];
}