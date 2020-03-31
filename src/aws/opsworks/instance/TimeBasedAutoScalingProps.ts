import { Value } from '../../../kloudformation/Value';

export function timeBasedAutoScalingProps(timeBasedAutoScalingPropsProps: TimeBasedAutoScalingProps): TimeBasedAutoScalingProps { return (timeBasedAutoScalingPropsProps) }

export interface TimeBasedAutoScalingProps {
    friday?: { [key: string]: Value<string> };
    monday?: { [key: string]: Value<string> };
    saturday?: { [key: string]: Value<string> };
    sunday?: { [key: string]: Value<string> };
    thursday?: { [key: string]: Value<string> };
    tuesday?: { [key: string]: Value<string> };
    wednesday?: { [key: string]: Value<string> };
}