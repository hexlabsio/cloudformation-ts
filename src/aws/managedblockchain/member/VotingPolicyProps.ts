import { ApprovalThresholdPolicyProps } from './ApprovalThresholdPolicyProps';

export function votingPolicyProps(votingPolicyPropsProps: VotingPolicyProps): VotingPolicyProps { return (votingPolicyPropsProps) }

export interface VotingPolicyProps {
    approvalThresholdPolicy?: ApprovalThresholdPolicyProps;
}