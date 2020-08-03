import { NotificationWithSubscribersProps } from './budget/NotificationWithSubscribersProps';
import { BudgetDataProps } from './budget/BudgetDataProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function budget(budgetProps: Budget): Budget { return ({ ...budgetProps, _logicalType: '' }) }
  
export interface Budget extends KloudResource {
  notificationsWithSubscribers?: NotificationWithSubscribersProps[]
  budget: BudgetDataProps
}