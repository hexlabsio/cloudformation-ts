import { Value } from '../../kloudformation/Value';
import { RotationRulesProps } from './rotationschedule/RotationRulesProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export type RotationScheduleAttributes = {  }
export function rotationSchedule(rotationScheduleProps: RotationSchedule): RotationSchedule & { attributes: RotationScheduleAttributes } { return ({ ...rotationScheduleProps, _logicalType: 'AWS::SecretsManager::RotationSchedule', attributes: {  } }) }

export interface RotationSchedule extends KloudResource {
    secretId: Value<string>;
    rotationLambdaARN?: Value<string>;
    rotationRules?: RotationRulesProps;
}