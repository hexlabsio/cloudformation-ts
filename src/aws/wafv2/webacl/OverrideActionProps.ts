import { Value } from '../../../kloudformation/Value';

export function overrideActionProps(overrideActionPropsProps: OverrideActionProps): OverrideActionProps { return (overrideActionPropsProps) }

export interface OverrideActionProps {
    count?: Value<any>;
    none?: Value<any>;
}