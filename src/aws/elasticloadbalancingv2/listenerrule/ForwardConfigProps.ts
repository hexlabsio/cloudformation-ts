import { TargetGroupStickinessConfigProps } from './TargetGroupStickinessConfigProps';
import { TargetGroupTupleProps } from './TargetGroupTupleProps';

export function forwardConfigProps(forwardConfigPropsProps: ForwardConfigProps): ForwardConfigProps { return (forwardConfigPropsProps) }

export interface ForwardConfigProps {
    targetGroupStickinessConfig?: TargetGroupStickinessConfigProps;
    targetGroups?: TargetGroupTupleProps[];
}