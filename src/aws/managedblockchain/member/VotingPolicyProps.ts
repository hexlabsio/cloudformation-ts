import { ApprovalThresholdPolicyProps } from './ApprovalThresholdPolicyProps';

export function votingPolicyProps(votingPolicyPropsProps: VotingPolicyProps): VotingPolicyProps { return (votingPolicyPropsProps) as unknown as VotingPolicyProps }

export interface VotingPolicyProps {
    approvalThresholdPolicy?: ApprovalThresholdPolicyProps;
}