import { ELBInfoProps } from './ELBInfoProps';
import { TargetGroupInfoProps } from './TargetGroupInfoProps';

export function loadBalancerInfoProps(loadBalancerInfoPropsProps: LoadBalancerInfoProps): LoadBalancerInfoProps { return (loadBalancerInfoPropsProps) as unknown as LoadBalancerInfoProps }

export interface LoadBalancerInfoProps {
    elbInfoList?: ELBInfoProps[];
    targetGroupInfoList?: TargetGroupInfoProps[];
}