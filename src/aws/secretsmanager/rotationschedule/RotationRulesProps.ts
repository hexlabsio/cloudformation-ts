import { Value } from '../../../kloudformation/Value';

export function rotationRulesProps(rotationRulesPropsProps: RotationRulesProps): RotationRulesProps { return (rotationRulesPropsProps) }

export interface RotationRulesProps {
    automaticallyAfterDays?: Value<number>;
}