import { TargetGroupStickinessConfigProps } from '../listenerrule/TargetGroupStickinessConfigProps';
import { TargetGroupTupleProps } from '../listenerrule/TargetGroupTupleProps';

export function forwardConfigProps(forwardConfigPropsProps: ForwardConfigProps): ForwardConfigProps { return (forwardConfigPropsProps) }

export interface ForwardConfigProps {
    targetGroupStickinessConfig?: TargetGroupStickinessConfigProps;
    targetGroups?: TargetGroupTupleProps[];
}