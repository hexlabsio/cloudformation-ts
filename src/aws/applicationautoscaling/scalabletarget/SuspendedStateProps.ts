import { Value } from '../../../kloudformation/Value';

export function suspendedStateProps(suspendedStatePropsProps: SuspendedStateProps): SuspendedStateProps { return (suspendedStatePropsProps) }

export interface SuspendedStateProps {
    dynamicScalingInSuspended?: Value<boolean>;
    dynamicScalingOutSuspended?: Value<boolean>;
    scheduledScalingSuspended?: Value<boolean>;
}