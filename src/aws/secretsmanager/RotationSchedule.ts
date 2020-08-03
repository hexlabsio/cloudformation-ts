import { Value } from '../../kloudformation/Value';
import { HostedRotationLambdaProps } from './rotationSchedule/HostedRotationLambdaProps';
import { RotationRulesProps } from './rotationSchedule/RotationRulesProps';
import { KloudResource } from '../../kloudformation/KloudResource';
export function rotationSchedule(rotationScheduleProps: RotationSchedule): RotationSchedule { return ({ ...rotationScheduleProps, _logicalType: '' }) }
  
export interface RotationSchedule extends KloudResource {
  secretId: Value<string>
  hostedRotationLambda?: HostedRotationLambdaProps
  rotationLambdaARN?: Value<string>
  rotationRules?: RotationRulesProps
}