import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';

export function waitCondition(waitConditionProps: WaitCondition & { logicalName?: string }): WaitCondition { return ({ ...waitConditionProps, _logicalType: 'AWS::CloudFormation::WaitCondition' }) as unknown as WaitCondition }

export interface WaitCondition extends KloudResource {
    count?: Value<number>;
    handle?: Value<string>;
    timeout?: Value<string>;
}