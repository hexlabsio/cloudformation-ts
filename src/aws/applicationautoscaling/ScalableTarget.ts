import { Value } from '../../kloudformation/Value';
import { ScheduledActionProps } from './scalabletarget/ScheduledActionProps';
import { SuspendedStateProps } from './scalabletarget/SuspendedStateProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type ScalableTargetAttributes = {  }
export function scalableTarget(scalableTargetProps: ScalableTarget): ScalableTarget & { attributes: ScalableTargetAttributes } { return ({ ...scalableTargetProps, _logicalType: 'AWS::ApplicationAutoScaling::ScalableTarget', attributes: {  } }) }

export interface ScalableTarget extends KloudResource {
    maxCapacity: Value<number>;
    minCapacity: Value<number>;
    resourceId: Value<string>;
    roleARN: Value<string>;
    scalableDimension: Value<string>;
    serviceNamespace: Value<string>;
    scheduledActions?: ScheduledActionProps[];
    suspendedState?: SuspendedStateProps;
}