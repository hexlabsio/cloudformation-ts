import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function compositeAlarm(compositeAlarmProps: CompositeAlarm & { logicalName?: string }): CompositeAlarm { return ({ ...compositeAlarmProps, _logicalType: 'AWS::CloudWatch::CompositeAlarm' }) as unknown as CompositeAlarm }

export interface CompositeAlarm extends KloudResource {
    alarmName: Value<string>;
    alarmRule: Value<string>;
    alarmDescription?: Value<string>;
    actionsEnabled?: Value<boolean>;
    oKActions?: Value<Value<string>[]>;
    alarmActions?: Value<Value<string>[]>;
    insufficientDataActions?: Value<Value<string>[]>;
}