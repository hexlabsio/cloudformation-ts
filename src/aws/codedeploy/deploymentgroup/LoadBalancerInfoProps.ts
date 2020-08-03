import { ELBInfoProps } from './ELBInfoProps';
import { TargetGroupInfoProps } from './TargetGroupInfoProps';

export interface LoadBalancerInfoProps {
  elbInfoList?: ELBInfoProps[]
  targetGroupInfoList?: TargetGroupInfoProps[]
}