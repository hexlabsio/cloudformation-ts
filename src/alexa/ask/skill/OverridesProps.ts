import { Value } from '../../../kloudformation/Value';

export function overridesProps(overridesPropsProps: OverridesProps): OverridesProps { return (overridesPropsProps) as unknown as OverridesProps }

export interface OverridesProps {
    manifest?: Value<any>;
}