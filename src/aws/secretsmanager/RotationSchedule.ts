import { Value } from '../../kloudformation/Value';
import { RotationRulesProps } from './rotationschedule/RotationRulesProps';
import { KloudResource } from '../../kloudformation/KloudResource';

export function rotationSchedule(rotationScheduleProps: RotationSchedule & { logicalName?: string }): RotationSchedule { return ({ ...rotationScheduleProps, _logicalType: 'AWS::SecretsManager::RotationSchedule' }) as unknown as RotationSchedule }

export interface RotationSchedule extends KloudResource {
    secretId: Value<string>;
    rotationLambdaARN?: Value<string>;
    rotationRules?: RotationRulesProps;
}