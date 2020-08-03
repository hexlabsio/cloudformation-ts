import { TargetGroupStickinessConfigProps } from './TargetGroupStickinessConfigProps';
import { TargetGroupTupleProps } from './TargetGroupTupleProps';

export interface ForwardConfigProps {
  targetGroupStickinessConfig?: TargetGroupStickinessConfigProps
  targetGroups?: TargetGroupTupleProps[]
}