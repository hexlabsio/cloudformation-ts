import { Value } from '../../../kloudformation/Value';

export function limitsProps(limitsPropsProps: LimitsProps): LimitsProps { return (limitsPropsProps) }

export interface LimitsProps {
    daily?: Value<number>;
    maximumDuration?: Value<number>;
    total?: Value<number>;
    messagesPerSecond?: Value<number>;
}