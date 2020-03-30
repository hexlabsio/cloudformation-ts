import { Value } from '../../../kloudformation/Value';

export function approvalThresholdPolicyProps(approvalThresholdPolicyPropsProps: ApprovalThresholdPolicyProps): ApprovalThresholdPolicyProps { return (approvalThresholdPolicyPropsProps) as unknown as ApprovalThresholdPolicyProps }

export interface ApprovalThresholdPolicyProps {
    thresholdComparator?: Value<string>;
    thresholdPercentage?: Value<number>;
    proposalDurationInHours?: Value<number>;
}