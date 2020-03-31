import { Value } from '../../../kloudformation/Value';

export function targetDescriptionProps(targetDescriptionPropsProps: TargetDescriptionProps): TargetDescriptionProps { return (targetDescriptionPropsProps) }

export interface TargetDescriptionProps {
    id: Value<string>;
    availabilityZone?: Value<string>;
    port?: Value<number>;
}