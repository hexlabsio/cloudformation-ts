import { ApplicationSourceProps } from './scalingPlan/ApplicationSourceProps';
import { ScalingInstructionProps } from './scalingPlan/ScalingInstructionProps';
import { Attribute } from '../../kloudformation/Attribute';
import { KloudResource } from '../../kloudformation/KloudResource';
export type ScalingPlanAttributes = { ScalingPlanName: Attribute<string>;ScalingPlanVersion: Attribute<string> }
export function scalingPlan(scalingPlanProps: ScalingPlan): ScalingPlan & {attributes: ScalingPlanAttributes} { return ({ ...scalingPlanProps, _logicalType: 'AWS::AutoScalingPlans::ScalingPlan', attributes: { ScalingPlanName: 'ScalingPlanName',ScalingPlanVersion: 'ScalingPlanVersion' } }) }
   
export interface ScalingPlan extends KloudResource {
  applicationSource: ApplicationSourceProps
  scalingInstructions: ScalingInstructionProps[]
}