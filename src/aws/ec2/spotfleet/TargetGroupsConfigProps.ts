import { TargetGroupProps } from './TargetGroupProps';

export function targetGroupsConfigProps(targetGroupsConfigPropsProps: TargetGroupsConfigProps): TargetGroupsConfigProps { return (targetGroupsConfigPropsProps) as unknown as TargetGroupsConfigProps }

export interface TargetGroupsConfigProps {
    targetGroups: TargetGroupProps[];
}