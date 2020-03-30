import { RecencyProps } from './RecencyProps';

export function behaviorProps(behaviorPropsProps: BehaviorProps): BehaviorProps { return (behaviorPropsProps) as unknown as BehaviorProps }

export interface BehaviorProps {
    recency?: RecencyProps;
}