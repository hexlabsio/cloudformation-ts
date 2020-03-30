import { Value } from '../../../kloudformation/Value';

export function reputationOptionsProps(reputationOptionsPropsProps: ReputationOptionsProps): ReputationOptionsProps { return (reputationOptionsPropsProps) as unknown as ReputationOptionsProps }

export interface ReputationOptionsProps {
    reputationMetricsEnabled?: Value<boolean>;
}