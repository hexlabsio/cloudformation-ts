import { ELBInfoProps } from './ELBInfoProps';
import { TargetGroupInfoProps } from './TargetGroupInfoProps';

export function loadBalancerInfoProps(loadBalancerInfoPropsProps: LoadBalancerInfoProps): LoadBalancerInfoProps { return (loadBalancerInfoPropsProps) }

export interface LoadBalancerInfoProps {
    elbInfoList?: ELBInfoProps[];
    targetGroupInfoList?: TargetGroupInfoProps[];
}