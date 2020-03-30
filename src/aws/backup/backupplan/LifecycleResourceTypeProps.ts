import { Value } from '../../../kloudformation/Value';

export function lifecycleResourceTypeProps(lifecycleResourceTypePropsProps: LifecycleResourceTypeProps): LifecycleResourceTypeProps { return (lifecycleResourceTypePropsProps) as unknown as LifecycleResourceTypeProps }

export interface LifecycleResourceTypeProps {
    deleteAfterDays?: Value<number>;
    moveToColdStorageAfterDays?: Value<number>;
}