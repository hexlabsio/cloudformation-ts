import { Value } from '../../../kloudformation/Value';

export function pointInTimeRecoverySpecificationProps(pointInTimeRecoverySpecificationPropsProps: PointInTimeRecoverySpecificationProps): PointInTimeRecoverySpecificationProps { return (pointInTimeRecoverySpecificationPropsProps) as unknown as PointInTimeRecoverySpecificationProps }

export interface PointInTimeRecoverySpecificationProps {
    pointInTimeRecoveryEnabled?: Value<boolean>;
}