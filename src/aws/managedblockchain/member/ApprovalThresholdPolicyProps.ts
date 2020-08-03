import { Value } from '../../../kloudformation/Value';

export interface ApprovalThresholdPolicyProps {
  thresholdComparator?: Value<string>
  thresholdPercentage?: Value<number>
  proposalDurationInHours?: Value<number>
}