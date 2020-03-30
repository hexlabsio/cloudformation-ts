import { Value } from '../../kloudformation/Value';
import { ScheduledActionProps } from './scalabletarget/ScheduledActionProps';
import { SuspendedStateProps } from './scalabletarget/SuspendedStateProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function scalableTarget(scalableTargetProps: ScalableTarget & { logicalName?: string }): ScalableTarget { return ({ ...scalableTargetProps, _logicalType: 'AWS::ApplicationAutoScaling::ScalableTarget' }) as unknown as ScalableTarget }

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