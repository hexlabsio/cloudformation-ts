import { ApplicationSourceProps } from './scalingplan/ApplicationSourceProps';
import { ScalingInstructionProps } from './scalingplan/ScalingInstructionProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function scalingPlan(scalingPlanProps: ScalingPlan & { logicalName?: string }): ScalingPlan { return ({ ...scalingPlanProps, _logicalType: 'AWS::AutoScalingPlans::ScalingPlan' }) as unknown as ScalingPlan }

export interface ScalingPlan extends KloudResource {
    applicationSource: ApplicationSourceProps;
    scalingInstructions: ScalingInstructionProps[];
}