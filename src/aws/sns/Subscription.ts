import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export type SubscriptionAttributes = {  }
export function subscription(subscriptionProps: Subscription): Subscription & { attributes: SubscriptionAttributes } { return ({ ...subscriptionProps, _logicalType: 'AWS::SNS::Subscription', attributes: {  } }) }

export interface Subscription extends KloudResource {
    protocol: Value<string>;
    topicArn: Value<string>;
    deliveryPolicy?: Value<any>;
    endpoint?: Value<string>;
    filterPolicy?: Value<any>;
    rawMessageDelivery?: Value<boolean>;
    redrivePolicy?: Value<any>;
    region?: Value<string>;
}