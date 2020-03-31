import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type SubscriptionFilterAttributes = {  }
export function subscriptionFilter(subscriptionFilterProps: SubscriptionFilter): SubscriptionFilter & { attributes: SubscriptionFilterAttributes } { return ({ ...subscriptionFilterProps, _logicalType: 'AWS::Logs::SubscriptionFilter', attributes: {  } }) }

export interface SubscriptionFilter extends KloudResource {
    destinationArn: Value<string>;
    filterPattern: Value<string>;
    logGroupName: Value<string>;
    roleArn?: Value<string>;
}