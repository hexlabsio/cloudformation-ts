import { BudgetDataProps } from './budget/BudgetDataProps';
import { NotificationWithSubscribersProps } from './budget/NotificationWithSubscribersProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function budget(budgetProps: Budget & { logicalName?: string }): Budget { return ({ ...budgetProps, _logicalType: 'AWS::Budgets::Budget' }) as unknown as Budget }

export interface Budget extends KloudResource {
    budget: BudgetDataProps;
    notificationsWithSubscribers?: NotificationWithSubscribersProps[];
}