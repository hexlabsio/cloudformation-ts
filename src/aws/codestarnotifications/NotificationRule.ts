import { Value } from '../../kloudformation/Value';
import { TargetProps } from './notificationrule/TargetProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function notificationRule(notificationRuleProps: NotificationRule & { logicalName?: string }): NotificationRule { return ({ ...notificationRuleProps, _logicalType: 'AWS::CodeStarNotifications::NotificationRule' }) as unknown as NotificationRule }

export interface NotificationRule extends KloudResource {
    eventTypeIds: Value<Value<string>[]>;
    detailType: Value<string>;
    resource: Value<string>;
    targets: TargetProps[];
    name: Value<string>;
    status?: Value<string>;
    tags?: Value<any>;
}