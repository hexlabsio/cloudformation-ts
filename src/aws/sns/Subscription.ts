import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function subscription(subscriptionProps: Subscription & { logicalName?: string }): Subscription { return ({ ...subscriptionProps, _logicalType: 'AWS::SNS::Subscription' }) as unknown as Subscription }

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