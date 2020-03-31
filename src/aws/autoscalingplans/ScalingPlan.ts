import { ApplicationSourceProps } from './scalingplan/ApplicationSourceProps';
import { ScalingInstructionProps } from './scalingplan/ScalingInstructionProps';
import { KloudResource } from '../../kloudformation/KloudResource';
import { Attribute } from '../../kloudformation/Attribute';

export type ScalingPlanAttributes = { ScalingPlanName: Attribute<string>; ScalingPlanVersion: Attribute<string> }
export function scalingPlan(scalingPlanProps: ScalingPlan): ScalingPlan & { attributes: ScalingPlanAttributes } { return ({ ...scalingPlanProps, _logicalType: 'AWS::AutoScalingPlans::ScalingPlan', attributes: { ScalingPlanName: 'ScalingPlanName', ScalingPlanVersion: 'ScalingPlanVersion' } }) }

export interface ScalingPlan extends KloudResource {
    applicationSource: ApplicationSourceProps;
    scalingInstructions: ScalingInstructionProps[];
}