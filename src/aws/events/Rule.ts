import { Value } from '../../kloudformation/Value';
import { TargetProps } from '../codestarnotifications/notificationrule/TargetProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function rule(ruleProps: Rule & { logicalName?: string }): Rule { return ({ ...ruleProps, _logicalType: 'AWS::Events::Rule' }) as unknown as Rule }

export interface Rule extends KloudResource {
    description?: Value<string>;
    eventBusName?: Value<string>;
    eventPattern?: Value<any>;
    name?: Value<string>;
    roleArn?: Value<string>;
    scheduleExpression?: Value<string>;
    state?: Value<string>;
    targets?: TargetProps[];
}