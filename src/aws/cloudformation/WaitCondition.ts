import { Value } from '../../kloudformation/Value';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type WaitConditionAttributes = { Data: Attribute<any> }
export function waitCondition(waitConditionProps: WaitCondition): WaitCondition & { attributes: WaitConditionAttributes } { return ({ ...waitConditionProps, _logicalType: 'AWS::CloudFormation::WaitCondition', attributes: { Data: 'Data' } }) }

export interface WaitCondition extends KloudResource {
    count?: Value<number>;
    handle?: Value<string>;
    timeout?: Value<string>;
}