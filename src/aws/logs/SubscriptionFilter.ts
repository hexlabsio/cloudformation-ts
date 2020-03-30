import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function subscriptionFilter(subscriptionFilterProps: SubscriptionFilter & { logicalName?: string }): SubscriptionFilter { return ({ ...subscriptionFilterProps, _logicalType: 'AWS::Logs::SubscriptionFilter' }) as unknown as SubscriptionFilter }

export interface SubscriptionFilter extends KloudResource {
    destinationArn: Value<string>;
    filterPattern: Value<string>;
    logGroupName: Value<string>;
    roleArn?: Value<string>;
}