import { Value } from '../../../kloudformation/Value';

export function overridesProps(overridesPropsProps: OverridesProps): OverridesProps { return (overridesPropsProps) }

export interface OverridesProps {
    manifest?: Value<any>;
}