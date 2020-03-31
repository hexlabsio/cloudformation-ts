import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type CompositeAlarmAttributes = { Arn: Attribute<string> }
export function compositeAlarm(compositeAlarmProps: CompositeAlarm): CompositeAlarm & { attributes: CompositeAlarmAttributes } { return ({ ...compositeAlarmProps, _logicalType: 'AWS::CloudWatch::CompositeAlarm', attributes: { Arn: 'Arn' } }) }

export interface CompositeAlarm extends KloudResource {
    alarmName: Value<string>;
    alarmRule: Value<string>;
    alarmDescription?: Value<string>;
    actionsEnabled?: Value<boolean>;
    oKActions?: Value<Value<string>[]>;
    alarmActions?: Value<Value<string>[]>;
    insufficientDataActions?: Value<Value<string>[]>;
}