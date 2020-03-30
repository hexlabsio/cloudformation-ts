import { Value } from '../../../kloudformation/Value';

export function rotationRulesProps(rotationRulesPropsProps: RotationRulesProps): RotationRulesProps { return (rotationRulesPropsProps) as unknown as RotationRulesProps }

export interface RotationRulesProps {
    automaticallyAfterDays?: Value<number>;
}