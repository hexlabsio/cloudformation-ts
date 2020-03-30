import { TargetGroupStickinessConfigProps } from '../listenerrule/TargetGroupStickinessConfigProps';
import { TargetGroupTupleProps } from '../listenerrule/TargetGroupTupleProps';

export function forwardConfigProps(forwardConfigPropsProps: ForwardConfigProps): ForwardConfigProps { return (forwardConfigPropsProps) as unknown as ForwardConfigProps }

export interface ForwardConfigProps {
    targetGroupStickinessConfig?: TargetGroupStickinessConfigProps;
    targetGroups?: TargetGroupTupleProps[];
}